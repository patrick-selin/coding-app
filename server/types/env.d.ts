// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;

    DATABASE_URL: string;
    TEST_DATABASE_URL: string;
    DATABASE_URL_MIGRATE: string;
    POSTGRES_DB: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_USER: string;
    POSTGRES_HOST: string;
  }
}
