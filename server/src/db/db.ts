import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// import { Pool } from "pg";
import * as schema from "./schema";
import "dotenv/config";

// const pool = new Pool({
//   host: process.env.POSTGRES_HOST,
//   port: Number(process.env.POSTGRES_PORT),
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
// });

// const db = drizzle(pool);

// export default db;
const juu =
  "postgres://patrick:jlafei8910fQQ-Hw92.W1l@127.0.0.1:5432/coding-app-db";
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const queryClient = postgres(juu);
// const queryClient = postgres(process.env.DATABASE_URL);

export const db = drizzle(queryClient, { schema, logger: true });
