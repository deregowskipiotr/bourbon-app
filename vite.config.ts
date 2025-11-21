import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  test: {
    environment: "jsdom", // Use jsdom for DOM-like testing environment
    setupFiles: "./src/setupTests.ts", // Path to setup file for jest-dom
    globals: true, // Enable global test APIs like describe, test, expect
  },
});
