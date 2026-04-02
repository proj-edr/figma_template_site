import { expect, test } from "@playwright/test";

test.describe("Home page visual regression", () => {
  test("matches desktop reference", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 3200 });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("Home-v1-desktop.png", {
      fullPage: true,
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    });
  });

  test("matches mobile reference", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 4200 });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveScreenshot("home-v1-mobile.png", {
      fullPage: true,
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    });
  });
});
