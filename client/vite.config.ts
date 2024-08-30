import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api1": {
        target: "http://localhost:3333",
        changeOrigin: true,
        secure: false, //
        rewrite: (path) => path.replace(/^\/api1/, "/api1"),
      },
    },
  },
});
