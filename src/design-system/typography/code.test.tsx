import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Code } from "./code";

describe("Code", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Code>const answer = 42;</Code>,
    );

    expect(
      screen.getByText("const answer = 42;"),
    ).toBeInTheDocument();
  });

  it("renders a code element", () => {
    renderWithProviders(
      <Code data-testid="code">
        console.log()
      </Code>,
    );

    expect(
      screen.getByTestId("code").tagName,
    ).toBe("CODE");
  });

  it("applies the default typography classes", () => {
    renderWithProviders(
      <Code data-testid="code">
        console.log()
      </Code>,
    );

    expect(
      screen.getByTestId("code"),
    ).toHaveClass(
      "rounded-md",
      "bg-muted",
      "px-1.5",
      "py-0.5",
      "font-mono",
      "text-sm",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Code
        className="text-red-500"
        data-testid="code"
      >
        console.log()
      </Code>,
    );

    expect(
      screen.getByTestId("code"),
    ).toHaveClass("text-red-500");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <Code
        id="snippet"
        data-testid="code"
      >
        console.log()
      </Code>,
    );

    const code =
      screen.getByTestId("code");

    expect(code).toHaveAttribute(
      "id",
      "snippet",
    );
  });
});
