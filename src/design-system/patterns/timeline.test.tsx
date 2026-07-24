import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Timeline } from "./timeline";

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

describe("Timeline", () => {
  it("renders its children", () => {
    renderWithProviders(
      <Timeline>
        <div>Step 1</div>
        <div>Step 2</div>
      </Timeline>,
    );

    expect(
      screen.getByText("Step 1"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Step 2"),
    ).toBeInTheDocument();
  });

  it("uses a Stack with a large gap", () => {
    renderWithProviders(
      <Timeline />,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveAttribute(
      "data-gap",
      "lg",
    );
  });

  it("forwards className", () => {
    renderWithProviders(
      <Timeline
        className="timeline"
      />,
    );

    expect(
      screen.getByTestId("stack"),
    ).toHaveClass("timeline");
  });

  it("forwards HTML attributes", () => {
    renderWithProviders(
      <Timeline
        id="timeline"
        data-testid="timeline"
      />,
    );

    expect(
      screen.getByTestId("timeline"),
    ).toHaveAttribute(
      "id",
      "timeline",
    );
  });

  it("renders without children", () => {
    renderWithProviders(
      <Timeline />,
    );

    expect(
      screen.getByTestId("stack"),
    ).toBeEmptyDOMElement();
  });
});
