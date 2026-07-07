import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/about",
  "/projects",
  "/journal",
  "/uses",
  "/now",
];

for (const page of pages) {
  test(`${page} has no accessibility violations`, async ({
    page: browser,
  }) => {
    await browser.goto(page);

    const results = await new AxeBuilder({
      page: browser,
    }).analyze();

    expect(results.violations).toEqual([]);
  });
}
