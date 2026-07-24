import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { CodeBlock } from "./code-block";

describe("CodeBlock", () => {
  it("renders code", () => {
    renderWithProviders(
      <CodeBlock
        code="const value = 42;"
      />,
    );

    expect(
      screen.getByText("const value = 42;"),
    ).toBeInTheDocument();
  });

  it("renders the language when provided", () => {
    renderWithProviders(
      <CodeBlock
        language="typescript"
        code="const value = 42;"
      />,
    );

    expect(
      screen.getByText("typescript"),
    ).toBeInTheDocument();
  });

  it("does not render a caption without a language", () => {
    const { container } = renderWithProviders(
      <CodeBlock code="const value = 42;" />,
    );

    expect(
      container.querySelector("figcaption"),
    ).not.toBeInTheDocument();
  });

  it("merges custom class names", () => {
    const { container } = renderWithProviders(
      <CodeBlock
        code="const value = 42;"
        className="custom-class"
      />,
    );

    expect(
      container.querySelector("figure"),
    ).toHaveClass("custom-class");
  });
});
