// vitest.integretion.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["SRC/tests/integration/*.test.ts"],
    exclude: ["src/**/*.test.ts"],
  },
});
