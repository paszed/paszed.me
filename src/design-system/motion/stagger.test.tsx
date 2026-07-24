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

import { Stagger } from "./stagger";

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

describe("Stagger", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useReducedMotion.mockReturnValue(false);
  });

  it("renders its children", () => {
    renderWithProviders(
      <Stagger>
        <div>One</div>
        <div>Two</div>
      </Stagger>,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("renders a plain div when reduced motion is preferred", () => {
    useReducedMotion.mockReturnValue(true);

    renderWithProviders(
      <Stagger className="custom">
        <div>Content</div>
      </Stagger>,
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
      <Stagger>
        <div>One</div>
        <div>Two</div>
      </Stagger>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.variants).toBeDefined();
    expect(props.custom).toBe(0.08);
    expect(props.initial).toBe("hidden");
    expect(props.whileInView).toBe("visible");

    expect(props.viewport).toEqual({
      once: true,
      amount: 0.2,
    });

    expect(props.transition).toEqual({
      delay: 0,
    });
  });

  it("creates the stagger transition from the custom value", () => {
    renderWithProviders(
      <Stagger stagger={0.15}>
        <div>Content</div>
      </Stagger>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    const variants = props.variants as {
      visible: (stagger: number) => {
        transition: {
          staggerChildren: number;
        };
      };
    };

    expect(variants.visible(0.15)).toEqual({
      transition: {
        staggerChildren: 0.15,
      },
    });
  });

  it("applies custom animation options", () => {
    renderWithProviders(
      <Stagger
        delay={0.3}
        stagger={0.15}
        once={false}
      >
        <div>Content</div>
      </Stagger>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.custom).toBe(0.15);

    expect(props.viewport).toEqual({
      once: false,
      amount: 0.2,
    });

    expect(props.transition).toEqual({
      delay: 0.3,
    });
  });

  it("merges class names", () => {
    renderWithProviders(
      <Stagger className="rounded-xl">
        <div>Content</div>
      </Stagger>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div">;

    expect(props.className).toContain(
      "rounded-xl",
    );
  });

  it("forwards motion props", () => {
    renderWithProviders(
      <Stagger
        id="timeline"
        data-testid="timeline"
      >
        <div>Content</div>
      </Stagger>,
    );

    const props =
      motionDiv.mock.calls[0][0] as HTMLMotionProps<"div"> & {
        "data-testid"?: string;
      };

    expect(props.id).toBe("timeline");
    expect(props["data-testid"]).toBe(
      "timeline",
    );
  });

  it("wraps a single child in a motion element", () => {
    renderWithProviders(
      <Stagger>
        <div>Only child</div>
      </Stagger>,
    );

    expect(motionDiv).toHaveBeenCalledTimes(2);
  });

  it("wraps each child in its own motion element", () => {
    renderWithProviders(
      <Stagger>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Stagger>,
    );

    expect(motionDiv).toHaveBeenCalledTimes(4);
  });
});
