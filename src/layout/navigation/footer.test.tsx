import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Footer } from "./footer";

const mockFooter = {
  labels: {
    navigation: "Navigation",
    resources: "Resources",
    developer: "Engineering",
    contact: "Contact",
    description:
      "Building software products, digital experiences, and engineering systems.",
    tagline:
      "Build. Solve. Ship.",
    copyright:
      "© {year} {owner}. All rights reserved.",
    builtWith:
      "Built with Next.js, TypeScript & Tailwind CSS.",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Our Work",
      href: "/projects",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  resources: [
    {
      label: "Projects",
      href: "/projects",
    },
  ],

  developer: [
    {
      label: "GitHub",
      href: "https://github.com/alapworks",
    },
  ],

  contact: [
    {
      label: "Tom",
      href: "mailto:tom@alapworks.com",
    },
  ],
} as const;

vi.mock("@/design-system", async (importOriginal) => {
  const actual =
    await importOriginal<
      typeof import("@/design-system")
    >();

  return {
    ...actual,
    Container: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <div data-testid="container">
        {children}
      </div>
    ),
  };
});

vi.mock("@/brand", () => ({
  BrandLogo: () => (
    <div data-testid="brand-logo">
      Brand
    </div>
  ),
}));

describe("Footer", () => {
  it("renders a contentinfo landmark", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByRole("contentinfo"),
    ).toBeInTheDocument();
  });

  it("renders the brand logo", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByTestId("brand-logo"),
    ).toBeInTheDocument();
  });

  it("wraps its content in a Container", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByTestId("container"),
    ).toBeInTheDocument();
  });

  it("renders the site description", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByText(
        /Building software products/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the engineering link", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByRole("link", {
        name: "GitHub",
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/alapworks",
    );
  });

  it("renders the business contact", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByRole("link", {
        name: "Tom",
      }),
    ).toHaveAttribute(
      "href",
      "mailto:tom@alapworks.com",
    );
  });

  it("renders the current year", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByText(
        new RegExp(
          `© ${new Date().getFullYear()}`,
        ),
      ),
    ).toBeInTheDocument();
  });

  it("renders the technology stack", () => {
    renderWithProviders(
      <Footer content={mockFooter} />,
    );

    expect(
      screen.getByText(
        /Built with Next\.js/i,
      ),
    ).toBeInTheDocument();
  });
});
