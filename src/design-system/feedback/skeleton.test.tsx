import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders a skeleton element", () => {
    renderWithProviders(
      <Skeleton data-testid="skeleton" />,
    );

    expect(
      screen.getByTestId("skeleton"),
    ).toBeInTheDocument();
  });

  it("renders as a div", () => {
    renderWithProviders(
      <Skeleton data-testid="skeleton" />,
    );

    expect(
      screen.getByTestId("skeleton").tagName,
    ).toBe("DIV");
  });

  it("applies the default skeleton classes", () => {
    renderWithProviders(
      <Skeleton data-testid="skeleton" />,
    );

    expect(
      screen.getByTestId("skeleton"),
    ).toHaveClass(
      "animate-pulse",
      "rounded-md",
      "bg-muted",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Skeleton
        data-testid="skeleton"
        className="custom-class"
      />,
    );

    expect(
      screen.getByTestId("skeleton"),
    ).toHaveClass("custom-class");
  });

  it("accepts native div props", () => {
    renderWithProviders(
      <Skeleton
        data-testid="skeleton"
        aria-hidden="true"
      />,
    );

    expect(
      screen.getByTestId("skeleton"),
    ).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
