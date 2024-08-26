// migrate.ts
import "dotenv/config";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import drizzleConfig from '../drizzle.config';

const DATABASE_URL = process.env.POSTGRES_DB_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const migrationClient = postgres(DATABASE_URL, { max: 1 });
const db: PostgresJsDatabase = drizzle(migrationClient);

const main = async () => {
  console.log("Migrating database...");
  await migrate(db, { migrationsFolder: drizzleConfig.out });
  await migrationClient.end();
  console.log("Database migrated successfully!");
};

main();
