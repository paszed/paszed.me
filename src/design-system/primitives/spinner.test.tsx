import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
} from "@/design-system/testing";

import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("renders the spinner", () => {
    const { container } = renderWithProviders(
      <Spinner />,
    );

    expect(
      container.querySelector("svg"),
    ).toBeInTheDocument();
  });

  it("applies the default spinner classes", () => {
    const { container } = renderWithProviders(
      <Spinner />,
    );

    expect(
      container.querySelector("svg"),
    ).toHaveClass(
      "size-4",
      "animate-spin",
    );
  });

  it("renders an svg element", () => {
    const { container } = renderWithProviders(
      <Spinner />,
    );

    expect(
      container.querySelector("svg")?.tagName,
    ).toBe("svg");
  });
});
