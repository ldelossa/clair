package postgres

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v4/pgxpool"
	clairerror "github.com/quay/clair/v4/clair-error"
)

// setDelivered will update the receipt's status to "delivered" for the provided
// notification id
func setDelivered(ctx context.Context, pool *pgxpool.Pool, id uuid.UUID) error {
	const (
		query = `UPDATE receipt SET status = 'delivered', ts = $1 WHERE notification_id = $2`
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
