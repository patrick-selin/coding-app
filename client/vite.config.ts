import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  build: {
    outDir: 'build', 
    sourcemap: true,
  },
  proxy: {
    '/api1': {
      target: 'http://server:3333',
      changeOrigin: true,
      secure: false,
    },
  },
});
