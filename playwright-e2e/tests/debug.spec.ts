import { test, expect } from "@playwright/test";

test("basic page load test", async ({ page }) => {
  await page.goto("http://BRAKElocalhost:80/home");

  await expect(page.locator("h1")).toHaveText("Home", {
    timeout: 10000,
  });
});
