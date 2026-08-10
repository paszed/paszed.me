import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/en/services",
  "/en/work",
  "/en/process",
  "/en/pricing",
  "/en/about",
  "/en/faq",
  "/en/contact",
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
