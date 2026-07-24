import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Sidebar } from "./sidebar";

describe("Sidebar", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Sidebar>
        <aside>Navigation</aside>
        <main>Content</main>
      </Sidebar>,
    );

    expect(
      screen.getByText("Navigation"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("does not introduce an additional wrapper element", () => {
    renderWithProviders(
      <Sidebar>
        <div data-testid="first">First</div>
        <div data-testid="second">Second</div>
      </Sidebar>,
    );

    const first = screen.getByTestId("first");
    const second = screen.getByTestId("second");

    expect(first.parentElement).toBe(
      second.parentElement,
    );

    expect(
      first.nextElementSibling,
    ).toBe(second);
  });

  it("renders nothing when no children are provided", () => {
    const { queryByText } =
      renderWithProviders(<Sidebar />);

    expect(
      queryByText(/.+/),
    ).not.toBeInTheDocument();
  });
});
