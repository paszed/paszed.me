import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Center } from "./center";

describe("Center", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Center>
        <div>Centered content</div>
      </Center>,
    );

    expect(
      screen.getByText("Centered content"),
    ).toBeInTheDocument();
  });

  it("applies the default centering classes", () => {
    renderWithProviders(
      <Center data-testid="center">
        <div>Content</div>
      </Center>,
    );

    expect(
      screen.getByTestId("center"),
    ).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Center
        data-testid="center"
        className="min-h-screen"
      >
        <div>Content</div>
      </Center>,
    );

    expect(
      screen.getByTestId("center"),
    ).toHaveClass(
      "min-h-screen",
      "flex",
      "items-center",
      "justify-center",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Center
        data-testid="center"
        id="hero"
        aria-label="Centered section"
      />
    );

    const center = screen.getByTestId("center");

    expect(center).toHaveAttribute("id", "hero");
    expect(center).toHaveAttribute(
      "aria-label",
      "Centered section",
    );
  });

  it("renders a div element", () => {
    renderWithProviders(
      <Center data-testid="center" />,
    );

    expect(
      screen.getByTestId("center").tagName,
    ).toBe("DIV");
  });
});
