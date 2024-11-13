// vitest.unit.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    // exclude: ["src/tests/integration/*.test.ts"],
  },
});
