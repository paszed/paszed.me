import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Hero } from "./hero";

vi.mock("../layout", () => ({
  Stack: ({
    children,
    gap,
  }: {
    children: React.ReactNode;
    gap?: string;
  }) => (
    <div
      data-testid="stack"
      data-gap={gap}
    >
      {children}
    </div>
  ),
}));

describe("Hero", () => {
  it("renders a header landmark", () => {
    renderWithProviders(
      <Hero>
        <h1>Hero</h1>
      </Hero>,
    );

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();
  });

  it("renders its children", () => {
    renderWithProviders(
      <Hero>
        <h1>Welcome</h1>
        <p>Build something great.</p>
      </Hero>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Welcome",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Build something great.",
      ),
    ).toBeInTheDocument();
  });

  it("wraps children in a Stack with a large gap", () => {
    renderWithProviders(
      <Hero>
        <p>Content</p>
      </Hero>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "data-gap",
      "lg",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Hero className="border-b">
        Hero
      </Hero>,
    );

    expect(
      screen.getByRole("banner"),
    ).toHaveClass("border-b");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <Hero
        id="hero"
        data-testid="hero"
      >
        Hero
      </Hero>,
    );

    const hero =
      screen.getByTestId("hero");

    expect(hero).toHaveAttribute(
      "id",
      "hero",
    );
  });

  it("renders without children", () => {
    renderWithProviders(<Hero />);

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("stack"),
    ).toBeEmptyDOMElement();
  });
});
