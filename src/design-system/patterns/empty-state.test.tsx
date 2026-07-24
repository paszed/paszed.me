import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { EmptyState } from "./empty-state";

vi.mock("../layout", () => ({
  Center: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      data-testid="center"
      className={className}
      {...props}
    >
      {children}
    </div>
  ),
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

vi.mock("../typography", () => ({
  Heading: ({
    children,
    as,
  }: {
    children: React.ReactNode;
    as?: string;
  }) => (
    <div
      data-testid="heading"
      data-as={as}
    >
      {children}
    </div>
  ),
  Text: ({
    children,
    muted,
  }: {
    children: React.ReactNode;
    muted?: boolean;
  }) => (
    <p
      data-testid="text"
      data-muted={muted}
    >
      {children}
    </p>
  ),
}));

describe("EmptyState", () => {
  it("renders the title", () => {
    renderWithProviders(
      <EmptyState title="No projects" />,
    );

    expect(
      screen.getByText("No projects"),
    ).toBeInTheDocument();
  });

  it("renders the title as an h2 heading", () => {
    renderWithProviders(
      <EmptyState title="No projects" />,
    );

    expect(
      screen.getByTestId("heading"),
    ).toHaveAttribute(
      "data-as",
      "h2",
    );
  });

  it("renders the description when provided", () => {
    renderWithProviders(
      <EmptyState
        title="No projects"
        description="Create your first project."
      />,
    );

    expect(
      screen.getByText(
        "Create your first project.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("text"),
    ).toHaveAttribute(
      "data-muted",
      "true",
    );
  });

  it("does not render the description when omitted", () => {
    renderWithProviders(
      <EmptyState title="No projects" />,
    );

    expect(
      screen.queryByTestId("text"),
    ).not.toBeInTheDocument();
  });

  it("renders children", () => {
    renderWithProviders(
      <EmptyState title="No projects">
        <button>Create project</button>
      </EmptyState>,
    );

    expect(
      screen.getByRole("button", {
        name: "Create project",
      }),
    ).toBeInTheDocument();
  });

  it("uses a Stack with a medium gap", () => {
    renderWithProviders(
      <EmptyState title="No projects" />,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "data-gap",
      "md",
    );
  });

  it("applies the default padding class", () => {
    renderWithProviders(
      <EmptyState
        title="No projects"
        data-testid="empty-state"
      />,
    );

    expect(
      screen.getByTestId("empty-state"),
    ).toHaveClass("py-16");
  });

  it("merges custom class names", () => {
    renderWithProviders(
      <EmptyState
        title="No projects"
        className="bg-muted"
        data-testid="empty-state"
      />,
    );

    expect(
      screen.getByTestId("empty-state"),
    ).toHaveClass(
      "py-16",
      "bg-muted",
    );
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <EmptyState
        title="No projects"
        id="empty"
        data-testid="empty-state"
      />,
    );

    expect(
      screen.getByTestId("empty-state"),
    ).toHaveAttribute(
      "id",
      "empty",
    );
  });
});
