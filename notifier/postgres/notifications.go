package postgres

import (
	"context"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v4/pgxpool"
	clairerror "github.com/quay/clair/v4/clair-error"
	"github.com/quay/clair/v4/notifier"
	"github.com/quay/clair/v4/pkg/pager"
)

// notifications returns a slice of notifications associated with the provided
// notification id
//
// this functions treats in page.Next argument as the page to fetch and return.
func notifications(ctx context.Context, pool *pgxpool.Pool, id uuid.UUID, page *pager.Page) ([]notifier.Notification, pager.Page, error) {
	const (
		query      = "SELECT id, body FROM notification_body WHERE notification_id = $1"
		pagedQuery = "SELECT id, body FROM notification_body WHERE notification_id = $1 OFFSET $2 LIMIT $3"
		count      = "SELECT COUNT(*) FROM notification_body WHERE notification_id = $1"
	)
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

	// get total number of notifications for this notification id
	var total uint64
	row := pool.QueryRow(ctx, count, id)
	err := row.Scan(&total)
	if err != nil {
		return nil, pager.Page{}, clairerror.ErrBadNotification{id, err}
	}
	p, offset, limit := pager.SQLPager(*page, total)

	// do query with offset and limit
	notifications := make([]notifier.Notification, 0, limit)
	rows, _ := pool.Query(ctx, pagedQuery, id, offset, limit)
	defer rows.Close()
	for rows.Next() {
		var n notifier.Notification
		err := rows.Scan(&n.ID, &n)
		if err != nil {
			return nil, pager.Page{}, clairerror.ErrBadNotification{id, err}
		}
		notifications = append(notifications, n)
	}

	return notifications, p, nil
}
