import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/en/about",
  "/en/projects",
  "/en/journal",
  "/en/uses",
  "/en/now",
];

for (const route of pages) {
  test(`${route} has no accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route);

    await expect(
      page.getByRole("main"),
    ).toBeVisible();

    const results = await new AxeBuilder({
      page,
    }).analyze();

    expect(results.violations).toEqual([]);
  });
}
