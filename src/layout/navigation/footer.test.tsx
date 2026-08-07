import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Footer } from "./footer";

const mockFooter = {
  navigation: [
    {
      label: "Home",
      href: "/",
    },
  ],

  resources: [
    {
      label: "Uses",
      href: "/uses",
    },
  ],

  developer: [
    {
      label: "GitHub",
      href: "https://github.com/paszed",
    },
  ],

  contact: [
    {
      label: "Email",
      href: "mailto:edvard@paszed.me",
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
    <div data-testid="brand-logo" />
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
        /Building developer tools/i,
      ),
    ).toBeInTheDocument();
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
