// migrate.ts
import { config } from "../config/config";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";

const databaseUrl =
  process.env.NODE_ENV === "test"
    ? config.TEST_DATABASE_URL
    : config.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Database URL is not defined");
}

console.log(`Connecting to database for migration: ${config.POSTGRES_DB}`);
console.log(`Node ENV: ${config.NODE_ENV}`);

const migrationClient = postgres(databaseUrl, {
  max: 2,
});

async function main() {
  console.log("Migrating database....");
  await migrate(drizzle(migrationClient), { migrationsFolder: "./migrations" });

  await migrationClient.end();
  console.log("Database migrated successfully!");
}

main();
