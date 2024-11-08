import { config } from "./src/config/config";
import { defineConfig } from "drizzle-kit";

const databaseUrl =
  config.NODE_ENV === "test" ? config.TEST_DATABASE_URL : config.DATABASE_URL;

console.log(`node huu: ${config.NODE_ENV}`);
console.log(`db url huu: ${databaseUrl}`);

if (!databaseUrl) {
  throw new Error("Database URL is not defined");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: databaseUrl,
  },
  verbose: true,
  strict: true,
});
