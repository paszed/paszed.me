import { expect, test } from "@playwright/test";

test.describe("Journal", () => {
  test("loads", async ({
    page,
  }) => {
    await page.goto("/journal");

    await expect(
      page.getByRole("heading", {
        level: 1,
      }),
    ).toBeVisible();
  });
});
