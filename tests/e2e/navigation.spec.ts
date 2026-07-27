import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  const pages = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Journal",
      href: "/journal",
    },
    {
      label: "Now",
      href: "/now",
    },
  ];

  for (const route of pages) {
    test(`opens ${route.label}`, async ({
      page,
    }) => {
      await page.goto("/");

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
