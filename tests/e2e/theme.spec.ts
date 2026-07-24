import { expect, test } from "@playwright/test";

test.describe("Theme", () => {
  test("theme toggle is available", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("button", {
        name: "Toggle theme",
      }),
    ).toBeVisible();
  });
});
