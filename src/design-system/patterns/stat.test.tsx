import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Stat } from "./stat";

vi.mock("../layout", () => ({
  Stack: ({
    children,
    gap,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    gap?: string;
  }) => (
    <div
      data-testid="stack"
      data-gap={gap}
      {...props}
    >
      {children}
    </div>
  ),
}));

vi.mock("../typography", () => ({
  Text: ({
    children,
    size,
    muted,
  }: {
    children: React.ReactNode;
    size?: string;
    muted?: boolean;
  }) => (
    <p
      data-testid="text"
      data-size={size}
      data-muted={muted}
    >
      {children}
    </p>
  ),
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
}));

describe("Stat", () => {
  it("renders the label", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
      />,
    );

    expect(
      screen.getByText("Users"),
    ).toBeInTheDocument();
  });

  it("renders the value", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
      />,
    );

    expect(
      screen.getByText("1,024"),
    ).toBeInTheDocument();
  });

  it("renders the label as muted small text", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
      />,
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveAttribute(
      "data-size",
      "sm",
    );

    expect(
      screen.getByTestId("text"),
    ).toHaveAttribute(
      "data-muted",
      "true",
    );
  });

  it("renders the value inside an h3 heading", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
      />,
    );

    expect(
      screen.getByTestId("heading"),
    ).toHaveAttribute(
      "data-as",
      "h3",
    );
  });

  it("uses a Stack with a small gap", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
      />,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "data-gap",
      "sm",
    );
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <Stat
        label="Users"
        value="1,024"
        id="stat"
        data-testid="stat"
      />,
    );

    expect(
      screen.getByTestId("stat"),
    ).toHaveAttribute(
      "id",
      "stat",
    );
  });

  it("supports React nodes as the value", () => {
    renderWithProviders(
      <Stat
        label="Status"
        value={<strong>Online</strong>}
      />,
    );

    expect(
      screen.getByText("Online"),
    ).toBeInTheDocument();
  });
});
