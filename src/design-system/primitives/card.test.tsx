import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card } from "./card";

describe("Card", () => {
  it("renders its children", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );

    expect(
      screen.getByText("Card content"),
    ).toBeInTheDocument();
  });

  it("renders as a div", () => {
    render(
      <Card data-testid="card">
        Content
      </Card>,
    );

    expect(
      screen.getByTestId("card").tagName,
    ).toBe("DIV");
  });

  it("applies the interactive variant", () => {
    render(
      <Card
        data-testid="card"
        variant="interactive"
      >
        Interactive
      </Card>,
    );

    expect(
      screen.getByTestId("card"),
    ).toHaveClass("hover:-translate-y-1");
  });

  it("merges custom class names", () => {
    render(
      <Card
        data-testid="card"
        className="custom-card"
      >
        Content
      </Card>,
    );

    expect(
      screen.getByTestId("card"),
    ).toHaveClass("custom-card");
  });

  it("forwards HTML attributes", () => {
    render(
      <Card data-testid="card">
        Content
      </Card>,
    );

    expect(
      screen.getByTestId("card"),
    ).toBeInTheDocument();
  });
});
