// db.ts

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { config } from "../config/config";

const databaseUrl =
  config.NODE_ENV === "test" ? config.TEST_DATABASE_URL : config.DATABASE_URL;
  console.log(`db url :: ${databaseUrl}`);
const queryClient = postgres(databaseUrl);
console.log(`Connecting to database: ${config.POSTGRES_DB}`);

export const db = drizzle(queryClient, { schema, logger: true });
