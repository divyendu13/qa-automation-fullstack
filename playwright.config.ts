import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "src/tests",
  testMatch: ["**/*.spec.ts"],
  use: {
    baseURL: "http://localhost:3000",
  },
  reporter: [["html", { open: "never" }]],
});
