// migrate.ts
import { config } from "../config/config";

import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";

const databaseUrl = config.DATABASE_URL;

console.log(`Connecting to database: ${config.POSTGRES_DB}`);

const migrationClient = postgres(databaseUrl, {
  max: 1,
});

async function main() {
  console.log("Migrating database....");
  await migrate(drizzle(migrationClient), { migrationsFolder: "./migrations" });

  await migrationClient.end();
  console.log("Database migrated successfully!");
}

main();
