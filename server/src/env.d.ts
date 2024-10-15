declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;

    POSTGRES_PASSWORD: string;
    POSTGRES_USER: string;
    POSTGRES_DB: string;
    POSTGRES_DB_URL: string;
    DATABASE_URL: string;
    DATABASE_URL_MIGRATE: string;

  }
}
