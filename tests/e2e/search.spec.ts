import { expect, test, type Page } from "@playwright/test";

async function openSearch(page: Page) {
  await page.goto("/");

  await expect(
    page.getByRole("navigation"),
  ).toBeVisible();

  const modifier =
    process.platform === "darwin"
      ? "Meta"
      : "Control";

  await page.keyboard.press(`${modifier}+K`);

  await expect(
    page.getByRole("searchbox"),
  ).toBeVisible();
}

test.describe("Search", () => {
  test("opens with keyboard shortcut", async ({
    page,
  }) => {
    await openSearch(page);
  });

  test("filters results", async ({
    page,
  }) => {
    await openSearch(page);

    await page
      .getByRole("searchbox")
      .fill("about");

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
    await openSearch(page);

    await page.keyboard.press("Escape");

    await expect(
      page.getByRole("searchbox"),
    ).toBeHidden();
  });
});
