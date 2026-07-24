import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Banner } from "./banner";

describe("Banner", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Banner>Maintenance in progress</Banner>,
    );

    expect(
      screen.getByText("Maintenance in progress"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Banner
        data-testid="banner"
        className="custom-class"
      >
        Banner
      </Banner>,
    );

    expect(
      screen.getByTestId("banner"),
    ).toHaveClass("custom-class");
  });

  it("accepts native div props", () => {
    renderWithProviders(
      <Banner data-testid="banner">
        Banner
      </Banner>,
    );

    expect(
      screen.getByTestId("banner"),
    ).toBeInTheDocument();
  });
});
