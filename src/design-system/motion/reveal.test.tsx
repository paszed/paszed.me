import type { HTMLMotionProps } from "motion/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import { Reveal } from "./reveal";

const {
  motionDiv,
  useReducedMotion,
} = vi.hoisted(() => ({
  motionDiv: vi.fn(),
  useReducedMotion: vi.fn(),
}));

vi.mock("motion/react", () => ({
  motion: {
    div: motionDiv,
  },
  useReducedMotion,
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

describe("Reveal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useReducedMotion.mockReturnValue(false);
  });

  it("renders its children", () => {
    renderWithProviders(
      <Reveal>
        <div>Content</div>
      </Reveal>,
    );

    expect(
      screen.getByText("Content"),
    ).toBeInTheDocument();
  });

  it("renders a plain div when reduced motion is preferred", () => {
    useReducedMotion.mockReturnValue(true);

    renderWithProviders(
      <Reveal className="custom">
        <div>Content</div>
      </Reveal>,
    );

    expect(
      screen.getByText("Content").parentElement,
    ).toHaveClass("custom");

    expect(
      screen.queryByTestId("motion-div"),
    ).not.toBeInTheDocument();

    expect(motionDiv).not.toHaveBeenCalled();
  });

  it("uses the default animation configuration", () => {
    renderWithProviders(
      <Reveal>
        <div>Content</div>
      </Reveal>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.initial).toEqual({
      opacity: 0,
      x: 0,
      y: 16,
      scale: 1,
    });

    expect(props.whileInView).toEqual({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    });

    expect(props.viewport).toEqual({
      once: true,
      amount: 0.2,
    });

    expect(props.transition).toEqual({
      duration: 0.45,
      delay: 0,
      ease: "easeOut",
    });
  });

  it("applies custom animation props", () => {
    renderWithProviders(
      <Reveal
        delay={0.25}
        x={32}
        y={48}
        scale={0.9}
        once={false}
      >
        <div>Content</div>
      </Reveal>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.initial).toEqual({
      opacity: 0,
      x: 32,
      y: 48,
      scale: 0.9,
    });

    expect(props.viewport).toEqual({
      once: false,
      amount: 0.2,
    });

    expect(props.transition).toEqual({
      duration: 0.45,
      delay: 0.25,
      ease: "easeOut",
    });
  });

  it("merges class names", () => {
    renderWithProviders(
      <Reveal className="rounded-xl">
        <div>Content</div>
      </Reveal>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.className).toContain("rounded-xl");
  });

  it("forwards motion props", () => {
    renderWithProviders(
      <Reveal
        data-testid="reveal"
        id="hero"
      >
        <div>Content</div>
      </Reveal>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div"> & {
        "data-testid"?: string;
      };

    expect(props.id).toBe("hero");
    expect(props["data-testid"]).toBe("reveal");
  });
});
