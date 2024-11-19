// vitest.integretion.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/tests/integration/*.test.ts"],
    // include: ["/usr/src/app/build/src/tests/integration/**/*.test.js"],
  },
});
