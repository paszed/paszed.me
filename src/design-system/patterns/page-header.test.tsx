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
      <PageHeader title="Projects" />,
    );

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();
  });

  it("renders the title as a heading", () => {
    renderWithProviders(
      <PageHeader title="Projects" />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Projects",
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders its children", () => {
    renderWithProviders(
      <PageHeader title="Projects">
        <span>
          Recent work
        </span>
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

  it("renders without a title", () => {
    renderWithProviders(
      <PageHeader>
        Content
      </PageHeader>,
    );

    expect(
      screen.queryByRole("heading"),
    ).not.toBeInTheDocument();

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("wraps its children in a Stack with the expected gap", () => {
    renderWithProviders(
      <PageHeader>
        Content
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
      <PageHeader id="page-header">
        Content
      </PageHeader>,
    );

    const header =
      screen.getByRole("banner");

    expect(header).toHaveAttribute(
      "id",
      "page-header",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <PageHeader />,
    );

    expect(
      screen.getByRole("banner"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("stack"),
    ).toBeEmptyDOMElement();
  });
});
