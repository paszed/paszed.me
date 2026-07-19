import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Click me</Button>);

    expect(
      screen.getByRole("button", {
        name: "Click me",
      }),
    ).toBeInTheDocument();
  });

  it("uses type='button' by default", () => {
    render(<Button>Default</Button>);

    expect(
      screen.getByRole("button"),
    ).toHaveAttribute("type", "button");
  });

  it("accepts a custom type", () => {
    render(
      <Button type="submit">
        Submit
      </Button>,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveAttribute("type", "submit");
  });

  it("forwards disabled", () => {
    render(
      <Button disabled>
        Disabled
      </Button>,
    );

    expect(
      screen.getByRole("button"),
    ).toBeDisabled();
  });

  it("merges custom class names", () => {
    render(
      <Button className="custom-class">
        Styled
      </Button>,
    );

    expect(
      screen.getByRole("button"),
    ).toHaveClass("custom-class");
  });
});
