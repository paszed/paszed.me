import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Stack } from "./stack";

describe("Stack", () => {
  it("renders its children", () => {
    render(
      <Stack>
        <p>First</p>
        <p>Second</p>
      </Stack>,
    );

    expect(
      screen.getByText("First"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Second"),
    ).toBeInTheDocument();
  });

  it("renders as a div", () => {
    render(
      <Stack data-testid="stack">
        Content
      </Stack>,
    );

    expect(
      screen.getByTestId("stack").tagName,
    ).toBe("DIV");
  });

  it("uses the default gap", () => {
    render(
      <Stack data-testid="stack">
        Content
      </Stack>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveClass("space-y-8");
  });

  it("applies a custom gap", () => {
    render(
      <Stack
        data-testid="stack"
        gap="sm"
      >
        Content
      </Stack>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveClass("space-y-4");
  });

  it("merges custom class names", () => {
    render(
      <Stack
        data-testid="stack"
        className="custom-stack"
      >
        Content
      </Stack>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveClass("custom-stack");
  });

  it("forwards HTML attributes", () => {
    render(
      <Stack
        data-testid="stack"
        aria-label="Example stack"
      >
        Content
      </Stack>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "aria-label",
      "Example stack",
    );
  });
});
