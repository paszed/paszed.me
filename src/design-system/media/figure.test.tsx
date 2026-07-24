import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Figure } from "./figure";

describe("Figure", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Figure>
        <span>Project image</span>
      </Figure>,
    );

    expect(
      screen.getByText("Project image"),
    ).toBeInTheDocument();
  });

  it("renders a caption when provided", () => {
    renderWithProviders(
      <Figure caption="Architecture overview">
        <span>Project image</span>
      </Figure>,
    );

    expect(
      screen.getByText("Architecture overview"),
    ).toBeInTheDocument();
  });

  it("does not render a figcaption without a caption", () => {
    const { container } = renderWithProviders(
      <Figure>
        <span>Project image</span>
      </Figure>,
    );

    expect(
      container.querySelector("figcaption"),
    ).not.toBeInTheDocument();
  });

  it("supports React nodes as captions", () => {
    renderWithProviders(
      <Figure
        caption={
          <span data-testid="caption">
            Detailed caption
          </span>
        }
      >
        <span>Project image</span>
      </Figure>,
    );

    expect(
      screen.getByTestId("caption"),
    ).toHaveTextContent("Detailed caption");
  });

  it("merges custom class names and forwards native props", () => {
    const { container } = renderWithProviders(
      <Figure
        className="custom-class"
        aria-label="Project figure"
        data-testid="figure"
      >
        <span>Project image</span>
      </Figure>,
    );

    const figure = screen.getByTestId("figure");

    expect(figure).toHaveClass(
      "space-y-3",
      "custom-class",
    );
    expect(figure).toHaveAttribute(
      "aria-label",
      "Project figure",
    );
    expect(
      container.querySelector("figure"),
    ).toBe(figure);
  });
});
