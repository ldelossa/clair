package postgres

import (
	"context"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v4/pgxpool"
	clairerror "github.com/quay/clair/v4/clair-error"
	"github.com/quay/clair/v4/notifier"
	"github.com/quay/clair/v4/pkg/pager"
	"github.com/rs/zerolog"
)

func notifications(ctx context.Context, pool *pgxpool.Pool, id uuid.UUID, page *pager.Page) ([]notifier.Notification, pager.Page, error) {
	const (
		query      = "SELECT id, body FROM notification_body WHERE notification_id = $1"
		pagedQuery = "SELECT id, body FROM notification_body WHERE notification_id = $1 AND id > $2 ORDER BY id ASC LIMIT $3"
	)
	log := zerolog.Ctx(ctx).With().
		Str("component", "notifier/postgres/notifications/notifications").
		Logger()
	ctx = log.WithContext(ctx)

	// if no page argument early return all notifications
	if page == nil {
		p := pager.Page{}
		notifications := make([]notifier.Notification, 0, 0)
		rows, _ := pool.Query(ctx, query, id.String())
		defer rows.Close()
		for rows.Next() {
			var n notifier.Notification
			err := rows.Scan(&n.ID, &n)
			if err != nil {
				return nil, p, clairerror.ErrBadNotification{id, err}
			}
			notifications = append(notifications, n)
		}
		return notifications, p, nil
	}

	// page to return to client
	outPage := pager.Page{
		Size: page.Size,
	}

	// page.Next being nil indicates a client's first
	// request for a paged set of notifications.
	if page.Next == nil {
		page.Next = &uuid.Nil
	}

	// add one to limit to determine if there is
	// another page to fetch
	limit := page.Size + 1

	log.Debug().Str("IncomingID", page.Next.String()).Msg("Incoming ID")

	notifications := make([]notifier.Notification, 0, limit)
	rows, _ := pool.Query(ctx, pagedQuery, id, page.Next, limit)
	defer rows.Close()
	for rows.Next() {
		var n notifier.Notification
		err := rows.Scan(&n.ID, &n)
		if err != nil {
			return nil, pager.Page{}, clairerror.ErrBadNotification{id, err}
		}
		notifications = append(notifications, n)
	}
	log.Debug().Int("len", len(notifications)).Msg("retrieved length")

	morePages := uint64(len(notifications)) == limit
	if morePages {
		// Slice off the last element as it was only an indicator
		// that another page should be delivered.
		//
		// Set outPage.Next to the final element id being returned
		// to the caller.
		notifications = notifications[:page.Size]
		outPage.Next = &(notifications[page.Size-1].ID)
	} else {
		outPage.Next = nil
	}

	log.Debug().Int("len", len(notifications)).Msg("Returning length")
	return notifications, outPage, nil
}
