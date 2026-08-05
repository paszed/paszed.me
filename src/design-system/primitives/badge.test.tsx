import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders its children", () => {
    render(<Badge>New</Badge>);

    expect(
      screen.getByText("New"),
    ).toBeInTheDocument();
  });

  it("renders as a span", () => {
    render(
      <Badge data-testid="badge">
        New
      </Badge>,
    );

    expect(
      screen.getByTestId("badge").tagName,
    ).toBe("SPAN");
  });

  it("merges custom class names", () => {
    render(
      <Badge
        data-testid="badge"
        className="custom-badge"
      >
        New
      </Badge>,
    );

    expect(
      screen.getByTestId("badge"),
    ).toHaveClass("custom-badge");
  });

  it("forwards HTML attributes", () => {
    render(
      <Badge
        data-testid="badge"
        aria-label="New badge"
      >
        New
      </Badge>,
    );

    expect(
      screen.getByTestId("badge"),
    ).toHaveAttribute(
      "aria-label",
      "New badge",
    );
  });

  it("includes its base styling", () => {
    render(
      <Badge data-testid="badge">
        New
      </Badge>,
    );

    expect(
      screen.getByTestId("badge"),
    ).toHaveClass(
      "inline-flex",
      "items-center",
      "rounded-md",
      "border",
      "bg-muted/40",
    );
  });
});
