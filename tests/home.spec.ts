import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads successfully", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveURL("/");

    await expect(
      page.getByRole("main"),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 1,
      }),
    ).toBeVisible();
  });

  test("shows the primary navigation", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("navigation"),
    ).toBeVisible();
  });
});
