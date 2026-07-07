import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "./text";

describe("Text", () => {
  it("renders its children", () => {
    render(<Text>Hello world</Text>);

    expect(
      screen.getByText("Hello world"),
    ).toBeInTheDocument();
  });

  it("renders as a paragraph", () => {
    render(
      <Text data-testid="text">
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text").tagName,
    ).toBe("P");
  });

  it("uses the default size", () => {
    render(
      <Text data-testid="text">
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveClass(
      "text-base",
      "leading-8",
    );
  });

  it("applies a custom size", () => {
    render(
      <Text
        data-testid="text"
        size="lg"
      >
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveClass(
      "text-lg",
      "leading-8",
    );
  });

  it("applies the muted variant", () => {
    render(
      <Text
        data-testid="text"
        muted
      >
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveClass("text-fg-secondary");
  });

  it("uses the default text color", () => {
    render(
      <Text data-testid="text">
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveClass("text-fg");
  });

  it("merges custom class names", () => {
    render(
      <Text
        data-testid="text"
        className="custom-text"
      >
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveClass("custom-text");
  });

  it("forwards HTML attributes", () => {
    render(
      <Text
        data-testid="text"
        aria-label="Example text"
      >
        Content
      </Text>,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveAttribute(
      "aria-label",
      "Example text",
    );
  });
});
