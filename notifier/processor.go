package notifier

import (
	"context"
	"errors"

	"github.com/google/uuid"
	clairerror "github.com/quay/clair/v4/clair-error"
	"github.com/quay/clair/v4/indexer"
	"github.com/quay/clair/v4/matcher"
	"github.com/quay/claircore"
	"github.com/quay/claircore/pkg/distlock"
	"github.com/rs/zerolog"
)

// Processor listen for new UOIDs, creates notifications, and persists
// these notifications for later retrieval.
//
// Processor(s) create atomic boundaries, no two Processor(s) will be creating
// notifications for the same UOID at once.
type Processor struct {
	// distributed lock used for mutual exclusion
	distLock distlock.Locker
	// a handle to an indexer service
	indexer indexer.Service
	// a handle to a matcher service
	matcher matcher.Service
	// a store instance to persist notifications
	store Store
	// previous is the UOID to set as previous when
	// obtaining a diff
	previous uuid.UUID
	// a integer id used for logging
	id uint8
}

func NewProcessor(id int, distLock distlock.Locker, indexer indexer.Service, matcher matcher.Service, store Store) *Processor {
	return &Processor{
		distLock: distLock,
		indexer:  indexer,
		matcher:  matcher,
		store:    store,
		id:       uint8(id),
	}
}

// Process receives new UOs as events, creates notifications, persists these notifications,
// and updates the notifier system with the "latest" seen UOID.
//
// Canceling the ctx will end the processing.
func (p *Processor) Process(ctx context.Context, c <-chan Event) {
	go p.process(ctx, c)
}

// process is intended to be ran as a go routine.
//
// implements a blocking event loop via a time.Ticker
func (p *Processor) process(ctx context.Context, c <-chan Event) {
	log := zerolog.Ctx(ctx).With().
		Uint8("processor_id", p.id).
		Str("component", "notifier/processor/Processor.process").Logger()

	log.Debug().Msg("processing events")
	for {
		select {
		case <-ctx.Done():
			log.Info().Msg("ctx canceld. ending event processing")
		case e := <-c:
			uoid := e.uo.Ref.String()
			log := zerolog.Ctx(ctx).With().
				Str("component", "notifier/processor/Processor.process").
				Str("updater", e.updater).
				Str("UOID", uoid).
				Uint8("processor_id", p.id).
				Logger()
			log.Debug().Msg("processing")
			locked, err := p.distLock.TryLock(ctx, uoid)
			if err != nil {
				log.Error().Err(err).Msg("received error trying lock. backing off till next UOID")
				continue
			}
			if !locked {
				log.Debug().Msg("lock acquired by another processor. will not process")
				continue
			}
			// function used to schedule unlock via defer
			err = func() error {
				defer p.distLock.Unlock()
				if !p.safe(ctx, e) {
					return nil
				}
				return p.create(ctx, e)
			}()
			if err != nil {
				log.Error().Err(err).Msg("failed to create notifications")
			}
		}
	}
}

// create implements the business logic of creating and persisting
// notifications
//
// will be performed under a distributed lock
func (p *Processor) create(ctx context.Context, e Event) error {
	uoid := e.uo.Ref.String()
	log := zerolog.Ctx(ctx).With().
		Uint8("processor_id", p.id).
		Str("component", "notifier/processor/Processor.create").
		Str("updater", e.updater).
		Str("UOID", uoid).
		Logger()
	log.Debug().Str("prev", p.previous.String()).Str("cur", uoid).Msg("retrieving diff")
	diff, err := p.matcher.UpdateDiff(ctx, p.previous, e.uo.Ref)
	if err != nil {
		return err
	}
	log.Debug().Int("removed", len(diff.Removed)).Int("added", len(diff.Added)).Msg("diff results")
	added, err := p.indexer.AffectedManifests(ctx, diff.Added)
	if err != nil {
		return err
	}
	removed, err := p.indexer.AffectedManifests(ctx, diff.Removed)
	if err != nil {
		return err
	}
	log.Debug().Int("added", len(added.VulnerableManifests)).Int("removed", len(removed.VulnerableManifests)).Msg("affected manifest counts")

	if len(added.VulnerableManifests) == 0 && len(removed.VulnerableManifests) == 0 {
		log.Debug().Msg("0 affected manifests. will not create notifications.")
		return nil
	}

	notifications := []Notification{}
	create := func(r Reason, affected claircore.AffectedManifests) error {
		for manifest, vulns := range affected.VulnerableManifests {
			// summarize most severe vuln affecting manifest
			// the vulns array will be sorted by most severe
			var vs VulnSummary
			vuln := affected.Vulnerabilities[vulns[0]]
			vs.FromVulnerability(*vuln)

			digest, err := claircore.ParseDigest(manifest)
			if err != nil {
				return err
			}
			n := Notification{
				Manifest:      digest,
				Reason:        r,
				Vulnerability: vs,
			}
			notifications = append(notifications, n)
		}
		return nil
	}
	err = create(Added, added)
	if err != nil {
		return err
	}
	err = create(Removed, removed)
	if err != nil {
		return err
	}
	opts := PutOpts{
		Updater:        e.updater,
		UpdateID:       e.uo.Ref,
		NotificationID: uuid.New(),
		Notifications:  notifications,
	}
	err = p.store.PutNotifications(ctx, opts)
	if err != nil {
		return err
	}
	return nil
}

// safe guards against situations where creating notifications is
// incorrect.
//
// will be performed under a distributed lock.
func (p *Processor) safe(ctx context.Context, e Event) bool {
	uoid := e.uo.Ref.String()
	log := zerolog.Ctx(ctx).With().
		Uint8("processor_id", p.id).
		Str("component", "notifier/processor/Processor.Process").
		Str("updater", e.updater).
		Str("UOID", uoid).
		Logger()
	// confirm we are not making duplicate notifications
	var errNoReceipt clairerror.ErrNoReceipt
	_, err := p.store.ReceiptByUOID(ctx, e.uo.Ref)
	switch {
	case errors.As(err, &errNoReceipt):
		// hop out of switch
	case err != nil:
		log.Error().Err(err).Msg("received error getting receipt by UOID")
		return false
	default:
		log.Info().Msg("receipt created by another processor. will not process notifications")
		return false
	}

	// confirm UOID is not stale and get previous UOID for diffing if exists.
	// if no previous UOID, return false, we don't want a full diff of notifications
	// TODO(louis) UpdateOperations signature supports getting "all" for a given updater
	// but code path is not implemented. implement this to optimize.
	all, err := p.matcher.UpdateOperations(ctx)
	if err != nil {
		log.Error().Err(err).Msg("received error getting update operations from matcher")
		return false
	}
	if _, ok := all[e.updater]; !ok {
		log.Warn().Msg("updater missing from update operations returned from matcher. matcher may have garbage collected")
		return false
	}

	uos := all[e.updater]
	n := len(uos)
	if n < 2 {
		log.Info().Msg("encountered first update operation. will not process notifications")
		return false
	}

	current, prev := uos[0], uos[1]
	if current.Ref.String() != e.uo.Ref.String() {
		log.Info().Str("new", current.Ref.String()).Msg("newer update operation is present, will not process notifications")
		return false
	}
	p.previous = prev.Ref
	return true
}
