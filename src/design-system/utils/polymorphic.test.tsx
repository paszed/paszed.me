import { createRef, type ElementType } from "react";
import { describe, expect, it } from "vitest";

import {
  renderWithProviders,
  screen,
} from "@/design-system/testing";

import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/design-system/types/polymorphic";

import { createPolymorphicComponent } from "./polymorphic";

const Box = createPolymorphicComponent<"div">(
  <C extends ElementType = "div">(
    {
      as,
      children,
      ...props
    }: PolymorphicComponentProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Component = (as ?? "div") as ElementType;

    return (
      <Component
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

describe("createPolymorphicComponent", () => {
  it("renders the default element", () => {
    renderWithProviders(
      <Box data-testid="box">
        Content
      </Box>,
    );

    expect(
      screen.getByTestId("box").tagName,
    ).toBe("DIV");
  });

  it("renders the element provided via the as prop", () => {
    renderWithProviders(
      <Box
        as="section"
        data-testid="box"
      >
        Content
      </Box>,
    );

    expect(
      screen.getByTestId("box").tagName,
    ).toBe("SECTION");
  });

  it("forwards refs", () => {
    const ref =
      createRef<HTMLButtonElement>();

    renderWithProviders(
      <Box
        as="button"
        ref={ref}
      >
        Click
      </Box>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLButtonElement,
    );
  });

  it("forwards props", () => {
    renderWithProviders(
      <Box
        id="box"
        className="rounded"
        data-testid="box"
      >
        Content
      </Box>,
    );

    const box =
      screen.getByTestId("box");

    expect(box).toHaveAttribute(
      "id",
      "box",
    );

    expect(box).toHaveClass(
      "rounded",
    );
  });

  it("renders children", () => {
    renderWithProviders(
      <Box>
        <span>Child</span>
      </Box>,
    );

    expect(
      screen.getByText("Child"),
    ).toBeInTheDocument();
  });
});
