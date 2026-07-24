import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { PageHeader } from "./page-header";

vi.mock("../layout", () => ({
  Stack: ({
    children,
    gap,
  }: {
    children: React.ReactNode;
    gap?: string;
  }) => (
    <div
      data-testid="stack"
      data-gap={gap}
    >
      {children}
    </div>
  ),
}));

describe("PageHeader", () => {
  it("renders a header landmark", () => {
    renderWithProviders(
      <PageHeader>
        <h1>Projects</h1>
      </PageHeader>,
    );

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();
  });

  it("renders its children", () => {
    renderWithProviders(
      <PageHeader>
        <h1>Projects</h1>
        <p>Recent work</p>
      </PageHeader>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Projects",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Recent work"),
    ).toBeInTheDocument();
  });

  it("wraps its children in a Stack with the expected gap", () => {
    renderWithProviders(
      <PageHeader>
        <p>Content</p>
      </PageHeader>,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "data-gap",
      "md",
    );
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <PageHeader className="border-b">
        Content
      </PageHeader>,
    );

    expect(
      screen.getByRole("banner"),
    ).toHaveClass("border-b");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <PageHeader
        id="page-header"
        data-testid="header"
      >
        Content
      </PageHeader>,
    );

    const header =
      screen.getByTestId("header");

    expect(header).toHaveAttribute(
      "id",
      "page-header",
    );
  });

  it("renders without children", () => {
    renderWithProviders(<PageHeader />);

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("stack"),
    ).toBeEmptyDOMElement();
  });
});
