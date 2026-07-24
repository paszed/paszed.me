import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Icon } from "./icon";

describe("Icon", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Icon>
        <svg data-testid="icon-svg" />
      </Icon>,
    );

    expect(
      screen.getByTestId("icon-svg"),
    ).toBeInTheDocument();
  });

  it("renders a span element", () => {
    renderWithProviders(
      <Icon data-testid="icon" />,
    );

    expect(
      screen.getByTestId("icon").tagName,
    ).toBe("SPAN");
  });

  it("applies the default icon classes", () => {
    renderWithProviders(
      <Icon data-testid="icon" />,
    );

    expect(
      screen.getByTestId("icon"),
    ).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <Icon
        data-testid="icon"
        className="text-primary"
      />,
    );

    expect(
      screen.getByTestId("icon"),
    ).toHaveClass(
      "text-primary",
      "inline-flex",
      "items-center",
      "justify-center",
    );
  });

  it("forwards native HTML props", () => {
    renderWithProviders(
      <Icon
        data-testid="icon"
        id="search-icon"
        aria-label="Search"
      />,
    );

    const icon = screen.getByTestId("icon");

    expect(icon).toHaveAttribute(
      "id",
      "search-icon",
    );
    expect(icon).toHaveAttribute(
      "aria-label",
      "Search",
    );
  });
});
