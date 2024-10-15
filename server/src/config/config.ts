// src/config.ts
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV || "development";

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${ENV}`),
});

interface Config {
    NODE_ENV: string;
    PORT: number;
  }

const port = process.env.PORT ? Number(process.env.PORT) : 3000;  

export const config: Config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: port,
  };
