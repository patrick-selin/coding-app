declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;

    DATABASE_URL: string;
    DATABASE_URL_MIGRATE: string;
  }
}