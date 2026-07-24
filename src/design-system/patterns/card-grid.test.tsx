import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { CardGrid } from "./card-grid";

vi.mock("../layout", () => ({
  Grid: ({
    children,
    columns,
    gap,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    columns?: number;
    gap?: string;
  }) => (
    <div
      data-testid="grid"
      data-columns={columns}
      data-gap={gap}
      {...props}
    >
      {children}
    </div>
  ),
}));

describe("CardGrid", () => {
  it("renders its children", () => {
    renderWithProviders(
      <CardGrid>
        <article>Card 1</article>
        <article>Card 2</article>
      </CardGrid>,
    );

    expect(
      screen.getByText("Card 1"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Card 2"),
    ).toBeInTheDocument();
  });

  it("uses two columns", () => {
    renderWithProviders(
      <CardGrid />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toHaveAttribute(
      "data-columns",
      "2",
    );
  });

  it("uses a large gap", () => {
    renderWithProviders(
      <CardGrid />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toHaveAttribute(
      "data-gap",
      "lg",
    );
  });

  it("forwards className", () => {
    renderWithProviders(
      <CardGrid
        className="border"
      />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toHaveClass("border");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <CardGrid
        id="cards"
        data-testid="cards"
      />,
    );

    expect(
      screen.getByTestId("cards"),
    ).toHaveAttribute(
      "id",
      "cards",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <CardGrid />,
    );

    expect(
      screen.getByTestId("grid"),
    ).toBeEmptyDOMElement();
  });
});
