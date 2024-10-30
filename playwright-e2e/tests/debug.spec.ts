import { test, expect } from "@playwright/test";

test("basic page load test", async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.goto("http://localhost:80");

  await expect(page.locator("h1")).toHaveText("Vite + React with TS", {
    timeout: 10000,
  });
});
