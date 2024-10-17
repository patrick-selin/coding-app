// src/config.ts
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${ENV}`),
});

interface Config {
  NODE_ENV: string;
  SERVER_PORT: number;
  SERVER_HOST: string;
  DATABASE_URL: string;
}

const server_port = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3334;

const server_host = process.env.SERVER_HOST
  ? process.env.SERVER_HOST
  : "127.0.0.1";

export const config: Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  SERVER_PORT: server_port,
  SERVER_HOST: server_host,
  DATABASE_URL: process.env.DATABASE_URL,
};
