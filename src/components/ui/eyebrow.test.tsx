import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Eyebrow } from "./eyebrow";

describe("Eyebrow", () => {
  it("renders its children", () => {
    render(<Eyebrow>Featured</Eyebrow>);

    expect(
      screen.getByText("Featured"),
    ).toBeInTheDocument();
  });

  it("renders as a paragraph", () => {
    render(
      <Eyebrow data-testid="eyebrow">
        Featured
      </Eyebrow>,
    );

    expect(
      screen.getByTestId("eyebrow").tagName,
    ).toBe("P");
  });

  it("merges custom class names", () => {
    render(
      <Eyebrow
        data-testid="eyebrow"
        className="custom-eyebrow"
      >
        Featured
      </Eyebrow>,
    );

    expect(
      screen.getByTestId("eyebrow"),
    ).toHaveClass("custom-eyebrow");
  });

  it("forwards HTML attributes", () => {
    render(
      <Eyebrow
        data-testid="eyebrow"
        aria-label="Category"
      >
        Featured
      </Eyebrow>,
    );

    expect(
      screen.getByTestId("eyebrow"),
    ).toHaveAttribute(
      "aria-label",
      "Category",
    );
  });

  it("includes its base styling", () => {
    render(
      <Eyebrow data-testid="eyebrow">
        Featured
      </Eyebrow>,
    );

    expect(
      screen.getByTestId("eyebrow"),
    ).toHaveClass(
      "font-sans",
      "uppercase",
      "text-accent",
    );
  });
});
