CREATE TABLE IF NOT EXISTS "test_items_two" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"content" varchar(255),
	"important" boolean
);
--> statement-breakpoint
DROP TABLE "test_items";