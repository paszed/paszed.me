import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Divider } from "./divider";

describe("Divider", () => {
  it("renders an hr element", () => {
    render(<Divider data-testid="divider" />);

    expect(
      screen.getByTestId("divider").tagName,
    ).toBe("HR");
  });

  it("merges custom class names", () => {
    render(
      <Divider
        data-testid="divider"
        className="custom-divider"
      />,
    );

    expect(
      screen.getByTestId("divider"),
    ).toHaveClass("custom-divider");
  });

  it("forwards HTML attributes", () => {
    render(
      <Divider
        data-testid="divider"
        aria-label="Section divider"
      />,
    );

    expect(
      screen.getByTestId("divider"),
    ).toHaveAttribute(
      "aria-label",
      "Section divider",
    );
  });

  it("includes its base styling", () => {
    render(<Divider data-testid="divider" />);

    expect(
      screen.getByTestId("divider"),
    ).toHaveClass(
      "border-0",
      "border-t",
      "border-border-muted",
    );
  });
});
