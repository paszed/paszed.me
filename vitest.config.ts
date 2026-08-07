import { resolve } from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  test: {
    environment: "jsdom",

    globals: true,

    setupFiles: ["./vitest.setup.ts"],

    exclude: [
      "tests/**",
      "node_modules/**",
      ".next/**",
      "dist/**",
    ],

    coverage: {
      provider: "v8",

      reporter: [
        "text",
        "html",
      ],

      exclude: [
        "**/index.ts",
        "**/index.tsx",
        "**/*.d.ts",
        "**/types.ts",
        "**/schemas.ts",
        "**/testing/matchers.ts",
      ],

      thresholds: {
        lines: 100,
        branches: 100,
        functions: 100,
        statements: 100,
      },
    },
  },
});
