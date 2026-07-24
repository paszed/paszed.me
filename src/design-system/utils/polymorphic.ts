import {
  type ElementType,
  forwardRef,
} from "react";

import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/design-system/types/polymorphic";

/**
 * The callable type exposed by a polymorphic component.
 */
export type PolymorphicComponent<
  DefaultElement extends ElementType,
  Props extends object = object,
> = <
  C extends ElementType = DefaultElement,
>(
  props: PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
  },
) => React.ReactElement | null;

/**
 * Creates a typed polymorphic component with support for the `as` prop
 * and forwarded refs.
 */
export function createPolymorphicComponent<
  DefaultElement extends ElementType,
  Props extends object = object,
>(
  render: <C extends ElementType = DefaultElement>(
    props: PolymorphicComponentProps<C, Props>,
    ref: PolymorphicRef<C>,
  ) => React.ReactElement | null,
): PolymorphicComponent<
  DefaultElement,
  Props
> {
  return forwardRef(
    render as never,
  ) as unknown as PolymorphicComponent<
    DefaultElement,
    Props
  >;
}
