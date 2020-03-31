package postgres

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v4/pgxpool"
	clairerror "github.com/quay/clair/v4/clair-error"
)

// setDeliveryFailed will update the receipt's status to "delivery_failed" for the provied
// notification id
func setDeliveryFailed(ctx context.Context, pool *pgxpool.Pool, id uuid.UUID) error {
	const (
		query = `UPDATE receipt SET status = 'delivery_failed', ts = $1 WHERE notification_id = $2`
	)

	tag, err := pool.Exec(ctx, query, time.Now(), id.String())
	if err != nil {
		return clairerror.ErrReceipt{id, err}
	}
	if tag.RowsAffected() <= 0 {
		return clairerror.ErrNoReceipt{id}
	}

	return nil
}
