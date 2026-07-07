import { expect, test } from "@playwright/test";

test.describe("Search", () => {
  test("opens with keyboard shortcut", async ({
    page,
  }) => {
    await page.goto("/");

    const modifier =
      process.platform === "darwin"
        ? "Meta"
        : "Control";

    await page.keyboard.press(`${modifier}+K`);

    await expect(
      page.getByRole("searchbox"),
    ).toBeVisible();
  });

  test("filters results", async ({
    page,
  }) => {
    await page.goto("/");

    const modifier =
      process.platform === "darwin"
        ? "Meta"
        : "Control";

    await page.keyboard.press(`${modifier}+K`);

    const input =
      page.getByRole("searchbox");

    await input.fill("about");

    await expect(
      page
        .getByRole("searchbox")
        .locator("..")
        .locator("..")
        .getByRole("link", {
          name: /about/i,
        }),
    ).toBeVisible();
  });

  test("closes on Escape", async ({
    page,
  }) => {
    await page.goto("/");

    const modifier =
      process.platform === "darwin"
        ? "Meta"
        : "Control";

    await page.keyboard.press(`${modifier}+K`);

    await page.keyboard.press("Escape");

    await expect(
      page.getByRole("searchbox"),
    ).toBeHidden();
  });
});
