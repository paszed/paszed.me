import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Inline } from "./inline";

describe("Inline", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Inline>
        <span>One</span>
        <span>Two</span>
      </Inline>,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("uses the default layout", () => {
    renderWithProviders(
      <Inline data-testid="inline" />,
    );

    expect(screen.getByTestId("inline")).toHaveClass(
      "flex",
      "gap-4",
      "items-center",
      "justify-start",
    );
  });

  it.each([
    ["sm", "gap-2"],
    ["md", "gap-4"],
    ["lg", "gap-6"],
  ] as const)(
    "applies the %s gap",
    (gap, expectedClass) => {
      renderWithProviders(
        <Inline
          data-testid="inline"
          gap={gap}
        />,
      );

      expect(
        screen.getByTestId("inline"),
      ).toHaveClass(expectedClass);
    },
  );

  it.each([
    ["start", "items-start"],
    ["center", "items-center"],
    ["end", "items-end"],
  ] as const)(
    "applies %s alignment",
    (align, expectedClass) => {
      renderWithProviders(
        <Inline
          data-testid="inline"
          align={align}
        />,
      );

      expect(
        screen.getByTestId("inline"),
      ).toHaveClass(expectedClass);
    },
  );

  it.each([
    ["start", "justify-start"],
    ["center", "justify-center"],
    ["end", "justify-end"],
    ["between", "justify-between"],
  ] as const)(
    "applies %s justification",
    (justify, expectedClass) => {
      renderWithProviders(
        <Inline
          data-testid="inline"
          justify={justify}
        />,
      );

      expect(
        screen.getByTestId("inline"),
      ).toHaveClass(expectedClass);
    },
  );

  it("merges custom class names", () => {
    renderWithProviders(
      <Inline
        data-testid="inline"
        className="bg-muted"
      />,
    );

    expect(
      screen.getByTestId("inline"),
    ).toHaveClass(
      "bg-muted",
      "flex",
      "gap-4",
      "items-center",
      "justify-start",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Inline
        data-testid="inline"
        id="toolbar"
        aria-label="Toolbar"
      />,
    );

    const inline = screen.getByTestId("inline");

    expect(inline).toHaveAttribute("id", "toolbar");
    expect(inline).toHaveAttribute(
      "aria-label",
      "Toolbar",
    );
  });
});
