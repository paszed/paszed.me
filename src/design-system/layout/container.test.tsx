import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Container } from "./container";

describe("Container", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Container>
        <div>Content</div>
      </Container>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("applies the default container classes", () => {
    renderWithProviders(
      <Container>
        <div>Content</div>
      </Container>,
    );

    const container =
      screen.getByText("Content").parentElement;

    expect(container).toHaveClass(
      "mx-auto",
      "w-full",
      "max-w-7xl",
      "px-6",
      "lg:px-8",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Container className="bg-red-500">
        <div>Content</div>
      </Container>,
    );

    const container =
      screen.getByText("Content").parentElement;

    expect(container).toHaveClass("bg-red-500");
    expect(container).toHaveClass("max-w-7xl");
  });

  it("renders exactly one wrapper element", () => {
    renderWithProviders(
      <Container>
        <div data-testid="content">Content</div>
      </Container>,
    );

    const content =
      screen.getByTestId("content");

    const container = content.parentElement;

    expect(container).toBeInstanceOf(
      HTMLDivElement,
    );

    expect(container?.children).toHaveLength(1);
    expect(container?.firstElementChild).toBe(
      content,
    );
  });
});
