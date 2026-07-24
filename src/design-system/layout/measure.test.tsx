import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Measure } from "./measure";

describe("Measure", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Measure>
        <p>Readable content</p>
      </Measure>,
    );

    expect(
      screen.getByText("Readable content"),
    ).toBeInTheDocument();
  });

  it("uses the default size", () => {
    renderWithProviders(
      <Measure data-testid="measure" />,
    );

    expect(
      screen.getByTestId("measure"),
    ).toHaveClass("max-w-2xl");
  });

  it.each([
    ["sm", "max-w-sm"],
    ["md", "max-w-md"],
    ["lg", "max-w-lg"],
    ["xl", "max-w-xl"],
    ["2xl", "max-w-2xl"],
    ["3xl", "max-w-3xl"],
    ["4xl", "max-w-4xl"],
  ] as const)(
    "applies the %s size",
    (size, expectedClass) => {
      renderWithProviders(
        <Measure
          data-testid="measure"
          size={size}
        />,
      );

      expect(
        screen.getByTestId("measure"),
      ).toHaveClass(expectedClass);
    },
  );

  it("merges custom class names", () => {
    renderWithProviders(
      <Measure
        data-testid="measure"
        className="mx-auto"
      />,
    );

    expect(
      screen.getByTestId("measure"),
    ).toHaveClass(
      "mx-auto",
      "max-w-2xl",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Measure
        data-testid="measure"
        id="article"
        aria-label="Article content"
      />,
    );

    const measure = screen.getByTestId("measure");

    expect(measure).toHaveAttribute("id", "article");
    expect(measure).toHaveAttribute(
      "aria-label",
      "Article content",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <Measure data-testid="measure" />,
    );

    expect(
      screen.getByTestId("measure"),
    ).toBeInTheDocument();
  });
});
