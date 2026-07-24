import type { HTMLMotionProps } from "motion/react";
import { describe, expect, it, vi } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { FadeIn } from "./fade-in";

const { motionDiv } = vi.hoisted(() => ({
  motionDiv: vi.fn(),
}));

vi.mock("motion/react", () => ({
  motion: {
    div: motionDiv,
  },
}));

motionDiv.mockImplementation(
  ({
    children,
    className,
    id,
  }: HTMLMotionProps<"div"> & {
    children?: React.ReactNode;
    "data-testid"?: string;
  }) => (
    <div
      id={id}
      className={className}
      data-testid="motion-div"
    >
      {children}
    </div>
  ),
);

describe("FadeIn", () => {
  it("renders its children", () => {
    renderWithProviders(
      <FadeIn>
        <div>Content</div>
      </FadeIn>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("renders the motion container", () => {
    renderWithProviders(
      <FadeIn>
        <div>Content</div>
      </FadeIn>,
    );

    expect(
      screen.getByTestId("motion-div"),
    ).toBeInTheDocument();
  });

  it("configures the expected animation", () => {
    renderWithProviders(
      <FadeIn>
        <div>Content</div>
      </FadeIn>,
    );

    expect(motionDiv).toHaveBeenCalled();

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.initial).toEqual({
      opacity: 0,
      y: 12,
    });

    expect(props.animate).toEqual({
      opacity: 1,
      y: 0,
    });

    expect(props.transition).toEqual({
      duration: 0.6,
      ease: "easeOut",
    });
  });
});
