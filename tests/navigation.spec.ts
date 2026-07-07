import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  const pages = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Journal", href: "/journal" },
    { label: "Uses", href: "/uses" },
    { label: "Now", href: "/now" },
    { label: "Links", href: "/links" },
  ];

  for (const route of pages) {
    test(`opens ${route.label}`, async ({
      page,
    }) => {
      await page.goto("/");

      await page
        .getByRole("link", {
          name: route.label,
        })
        .click();

      await expect(page).toHaveURL(route.href);

      await expect(
        page.getByRole("heading", {
          level: 1,
        }),
      ).toBeVisible();
    });
  }
});
