import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import "dotenv/config";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const queryClient = postgres(process.env.DATABASE_URL as string);

export const db = drizzle(queryClient, { schema, logger: true });
