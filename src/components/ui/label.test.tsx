import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./label";

describe("Label", () => {
  it("renders its children", () => {
    render(<Label>Status</Label>);

    expect(
      screen.getByText("Status"),
    ).toBeInTheDocument();
  });

  it("renders as a span", () => {
    render(
      <Label data-testid="label">
        Status
      </Label>,
    );

    expect(
      screen.getByTestId("label").tagName,
    ).toBe("SPAN");
  });

  it("merges custom class names", () => {
    render(
      <Label
        data-testid="label"
        className="custom-label"
      >
        Status
      </Label>,
    );

    expect(
      screen.getByTestId("label"),
    ).toHaveClass("custom-label");
  });

  it("forwards HTML attributes", () => {
    render(
      <Label
        data-testid="label"
        aria-label="Status label"
      >
        Status
      </Label>,
    );

    expect(
      screen.getByTestId("label"),
    ).toHaveAttribute(
      "aria-label",
      "Status label",
    );
  });

  it("includes its base styling", () => {
    render(
      <Label data-testid="label">
        Status
      </Label>,
    );

    expect(
      screen.getByTestId("label"),
    ).toHaveClass(
      "text-xs",
      "uppercase",
      "text-fg-muted",
    );
  });
});
