import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Pagination } from "./pagination";

describe("Pagination", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Pagination>
        <button>Previous</button>
        <button>Next</button>
      </Pagination>,
    );

    expect(
      screen.getByRole("button", {
        name: "Previous",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Next",
      }),
    ).toBeInTheDocument();
  });

  it("uses the pagination navigation role", () => {
    renderWithProviders(
      <Pagination />
    );

    expect(
      screen.getByRole("navigation", {
        name: "Pagination",
      }),
    ).toBeInTheDocument();
  });

  it("accepts native nav props", () => {
    renderWithProviders(
      <Pagination data-testid="pagination" />
    );

    expect(
      screen.getByTestId("pagination"),
    ).toBeInTheDocument();
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Pagination className="custom-class" />
    );

    expect(
      screen.getByRole("navigation"),
    ).toHaveClass("custom-class");
  });
});
