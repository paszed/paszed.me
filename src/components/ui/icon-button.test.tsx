import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("renders its children", () => {
    render(
      <IconButton aria-label="Menu">
        ☰
      </IconButton>,
    );

    expect(
      screen.getByRole("button", {
        name: "Menu",
      }),
    ).toBeInTheDocument();
  });

  it("renders as a button", () => {
    render(
      <IconButton
        data-testid="button"
        aria-label="Menu"
      />
    );

    expect(
      screen.getByTestId("button").tagName,
    ).toBe("BUTTON");
  });

  it("merges custom class names", () => {
    render(
      <IconButton
        data-testid="button"
        className="custom-icon-button"
        aria-label="Menu"
      />
    );

    expect(
      screen.getByTestId("button"),
    ).toHaveClass("custom-icon-button");
  });

  it("forwards HTML attributes", () => {
    render(
      <IconButton
        data-testid="button"
        aria-label="Navigation menu"
      />
    );

    expect(
      screen.getByTestId("button"),
    ).toHaveAttribute(
      "aria-label",
      "Navigation menu",
    );
  });

  it("includes its base styling", () => {
    render(
      <IconButton
        data-testid="button"
        aria-label="Menu"
      />
    );

    expect(
      screen.getByTestId("button"),
    ).toHaveClass(
      "inline-flex",
      "rounded-lg",
      "border",
    );
  });
});
