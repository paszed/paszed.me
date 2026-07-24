import { devices, expect, test } from "@playwright/test";

test.use(devices["iPhone 13"]);

test("homepage loads on mobile", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("main"),
  ).toBeVisible();
});
