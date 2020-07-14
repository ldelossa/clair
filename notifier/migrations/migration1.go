package migrations

const (
	// migration1 is the initial schema necessary for an indexer to operate
	migration1 = `
	--- an identity table for notifications
	CREATE TABLE IF NOT EXISTS notification (
		id uuid PRIMARY KEY
	);

	--- a relation expressing the latest update operation
	--- processed for a given updater name
	CREATE TABLE IF NOT EXISTS notifier_update_operation (
		uo_id uuid PRIMARY KEY,
		updater text,
		ts timestamptz
	);

	--- a relation mapping notifications to their serialized json bodies
	CREATE TABLE IF NOT EXISTS notification_body (
		id uuid PRIMARY KEY,
		notification_id uuid REFERENCES notification,
		body jsonb NOT NULL -- serialized json body of notification
	);

	--- an enumeration identifying the possible status a receipt may be in
	CREATE TYPE receiptstatus AS ENUM ('created', 'delivered', 'delivery_failed', 'deleted');

	--- a relation expressing the current status of a notification
	--- this acts as a trigger for application business logic
	CREATE TABLE IF NOT EXISTS receipt (
		notification_id uuid PRIMARY KEY REFERENCES notification,
		uo_id uuid REFERENCES notifier_update_operation(uo_id),
		status receiptstatus NOT NULL,
		ts timestamptz,
		details jsonb -- any additional details specific to the delivery mechanism
	);
	`
)