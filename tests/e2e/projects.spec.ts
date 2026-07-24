import { expect, test } from "@playwright/test";

test.describe("Projects", () => {
  test("loads", async ({
    page,
  }) => {
    await page.goto("/projects");

    await expect(
      page.getByRole("heading", {
        level: 1,
      }),
    ).toBeVisible();
  });
});
