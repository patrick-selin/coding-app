import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { config } from "../config/config";


const queryClient = postgres(config.DATABASE_URL);
// let queryClient;

// if (process.env.NODE_ENV === 'development') {
//     queryClient = postgres(config.DATABASE_URL_DEV);
// } else if (process.env.NODE_ENV === 'production') {
//     // queryClient = postgres(config.DATABASE_URL);
// } else if (process.env.NODE_ENV === 'test') {
//     // queryClient = postgres(config.DATABASE_URL_TEST);
// } else {
//     throw new Error('Unknown NODE_ENV');
// }

export const db = drizzle(queryClient, { schema, logger: true });