import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Surface } from "./surface";

describe("Surface", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Surface>
        <div>Content</div>
      </Surface>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("uses the default variant", () => {
    renderWithProviders(
      <Surface data-testid="surface" />,
    );

    expect(
      screen.getByTestId("surface"),
    ).toHaveClass("bg-background");
  });

  it.each([
    ["default", "bg-background"],
    ["muted", "bg-muted"],
    ["accent", "bg-accent/5"],
  ] as const)(
    "applies the %s variant",
    (variant, expectedClass) => {
      renderWithProviders(
        <Surface
          data-testid="surface"
          variant={variant}
        />,
      );

      expect(
        screen.getByTestId("surface"),
      ).toHaveClass(expectedClass);
    },
  );

  it("merges custom class names", () => {
    renderWithProviders(
      <Surface
        data-testid="surface"
        className="rounded-lg"
      />,
    );

    expect(
      screen.getByTestId("surface"),
    ).toHaveClass(
      "rounded-lg",
      "bg-background",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Surface
        data-testid="surface"
        id="card"
        aria-label="Card surface"
      />,
    );

    const surface = screen.getByTestId("surface");

    expect(surface).toHaveAttribute("id", "card");
    expect(surface).toHaveAttribute(
      "aria-label",
      "Card surface",
    );
  });

  it("renders a div element", () => {
    renderWithProviders(
      <Surface data-testid="surface" />,
    );

    expect(
      screen.getByTestId("surface").tagName,
    ).toBe("DIV");
  });
});
