import { config } from "./src/config/config";
import { defineConfig } from "drizzle-kit";
import fs from "fs";

const databaseUrl =
  config.NODE_ENV === "test" ? config.TEST_DATABASE_URL : config.DATABASE_URL;

console.log(`node huu: ${config.NODE_ENV}`);
console.log(`db url huu: ${databaseUrl}`);

if (!databaseUrl) {
  throw new Error("Database URL is not defined");
}

const sslConfig =
  config.NODE_ENV === "production"
    ? {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./global-bundle.pem").toString(),
      }
    : undefined;

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: databaseUrl,
    ssl: sslConfig,
  },
  verbose: true,
  strict: true,
});
