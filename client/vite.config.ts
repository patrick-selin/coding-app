import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@heroicons/react"],
  },
  test: {
    environment: "jsdom",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        format: "es", // For ES module output
      },
    },
    sourcemap: true,
  },
});
