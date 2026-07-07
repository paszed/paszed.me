import { resolve } from "node:path";

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  test: {
    environment: "node",
    globals: true,

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});
