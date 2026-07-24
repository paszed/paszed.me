import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { PropertyList } from "./property-list";

vi.mock("../layout", () => ({
  Stack: ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <div data-testid="stack">
      {children}
    </div>
  ),
}));

describe("PropertyList", () => {
  it("renders a description list", () => {
    renderWithProviders(
      <PropertyList data-testid="list" />,
    );

    expect(
      screen.getByTestId("list").tagName,
    ).toBe("DL");
  });

  it("renders its children", () => {
    renderWithProviders(
      <PropertyList>
        <dt>Name</dt>
        <dd>ChatGPT</dd>
      </PropertyList>,
    );

    expect(
      screen.getByText("Name"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("ChatGPT"),
    ).toBeInTheDocument();
  });

  it("wraps its children in a Stack", () => {
    renderWithProviders(
      <PropertyList>
        <dt>Name</dt>
      </PropertyList>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toBeInTheDocument();
  });

  it("forwards className", () => {
    renderWithProviders(
      <PropertyList
        className="border"
        data-testid="list"
      />,
    );

    expect(
      screen.getByTestId("list"),
    ).toHaveClass("border");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <PropertyList
        id="properties"
        data-testid="list"
      />,
    );

    expect(
      screen.getByTestId("list"),
    ).toHaveAttribute(
      "id",
      "properties",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <PropertyList data-testid="list" />,
    );

    expect(
      screen.getByTestId("list").tagName,
    ).toBe("DL");

    expect(
      screen.getByTestId("stack"),
    ).toBeEmptyDOMElement();
  });
});
