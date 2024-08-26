// migrate.ts
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL as string;

console.log(`Connecting to database: ${process.env.POSTGRES_DB}`);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const migrationClient = postgres(databaseUrl, {
  max: 1,
});

async function main() {
  console.log("Migrating database...");
  await migrate(drizzle(migrationClient), { migrationsFolder: "./migrations" });

  await migrationClient.end();
  console.log("Database migrated successfully!");
}

main();
