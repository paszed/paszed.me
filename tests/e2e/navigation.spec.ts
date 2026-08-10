import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  const pages = [
    {
      label: "Services",
      href: "/en/services",
    },
    {
      label: "Our Work",
      href: "/en/work",
    },
    {
      label: "Process",
      href: "/en/process",
    },
    {
      label: "Pricing",
      href: "/en/pricing",
    },
    {
      label: "About Us",
      href: "/en/about",
    },
    {
      label: "FAQ",
      href: "/en/faq",
    },
  ];

  for (const route of pages) {
    test(`opens ${route.label}`, async ({
      page,
    }) => {
      await page.goto("/en");

      const navigation = page.getByRole(
        "navigation",
        {
          name: "Primary navigation",
        },
      );

      await navigation
        .getByRole("link", {
          name: route.label,
        })
        .first()
        .click();

      await expect(page).toHaveURL(
        route.href,
      );

      await expect(
        page.getByRole("main"),
      ).toBeVisible();
    });
  }
});
