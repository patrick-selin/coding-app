import { test, expect } from "@playwright/test";

test.describe("App data fetching with backend", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:80");
  });

  test("should display fetched data from the server/db", async ({ page }) => {
    await expect(page.locator("h2")).toHaveText("TestData");

    const firstItem = page.locator("li").first();
    await expect(firstItem.locator("h3")).not.toBeEmpty();
    await expect(firstItem.locator("h3")).toHaveText("Test Word 1");

    await expect(firstItem.locator("p")).not.toBeEmpty();
    await expect(firstItem.locator("p")).toHaveText("Important");
  });
});
