import { expect, test } from "@playwright/test";

test.describe("Accessibility", () => {
  test("has one H1", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
      }),
    ).toHaveCount(1);
  });

  test("has main landmark", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("main"),
    ).toBeVisible();
  });

  test("has footer landmark", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("contentinfo"),
    ).toBeVisible();
  });
});
