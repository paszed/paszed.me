import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Footer } from "./footer";

vi.mock("../layout", () => ({
  Container: ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <div data-testid="container">
      {children}
    </div>
  ),
}));

vi.mock("@/brand/components/logo", () => ({
  BrandLogo: () => (
    <div data-testid="brand-logo" />
  ),
}));

describe("Footer", () => {
  it("renders a contentinfo landmark", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByRole("contentinfo"),
    ).toBeInTheDocument();
  });

  it("renders the brand logo", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByTestId("brand-logo"),
    ).toBeInTheDocument();
  });

  it("wraps its content in a Container", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByTestId("container"),
    ).toBeInTheDocument();
  });

  it("renders the site description", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByText(
        /Building developer tools/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the current year", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByText(
        new RegExp(
          `© ${new Date().getFullYear()}`,
        ),
      ),
    ).toBeInTheDocument();
  });

  it("renders the technology stack", () => {
    renderWithProviders(<Footer />);

    expect(
      screen.getByText(
        /Built with Next\.js/i,
      ),
    ).toBeInTheDocument();
  });
});
