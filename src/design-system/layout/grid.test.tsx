import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Grid } from "./grid";

describe("Grid", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Grid>
        <div>Item</div>
      </Grid>,
    );

    expect(
      screen.getByText("Item"),
    ).toBeInTheDocument();
  });

  it("uses the default grid configuration", () => {
    renderWithProviders(
      <Grid data-testid="grid" />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toHaveClass(
      "grid",
      "grid-cols-1",
      "gap-4",
    );
  });

  it.each([
    [1, "grid-cols-1"],
    [2, "sm:grid-cols-2"],
    [3, "lg:grid-cols-3"],
    [4, "lg:grid-cols-4"],
  ] as const)(
    "renders %i columns responsively",
    (columns, expectedClass) => {
      renderWithProviders(
        <Grid
          data-testid="grid"
          columns={columns}
        />,
      );

      expect(
        screen.getByTestId("grid"),
      ).toHaveClass(expectedClass);
    },
  );

  it.each([
    ["sm", "gap-2"],
    ["md", "gap-4"],
    ["lg", "gap-6"],
  ] as const)(
    "renders %s gap",
    (gap, expectedClass) => {
      renderWithProviders(
        <Grid
          data-testid="grid"
          gap={gap}
        />,
      );

      expect(
        screen.getByTestId("grid"),
      ).toHaveClass(expectedClass);
    },
  );

  it("merges custom class names", () => {
    renderWithProviders(
      <Grid
        data-testid="grid"
        className="bg-muted"
      />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toHaveClass(
      "bg-muted",
      "grid",
      "grid-cols-1",
      "gap-4",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Grid
        data-testid="grid"
        id="projects"
        aria-label="Projects"
      />,
    );

    const grid =
      screen.getByTestId("grid");

    expect(grid).toHaveAttribute(
      "id",
      "projects",
    );

    expect(grid).toHaveAttribute(
      "aria-label",
      "Projects",
    );
  });
});
