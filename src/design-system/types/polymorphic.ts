import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

/**
 * Any valid React element or component that can be rendered.
 */
export type As = ElementType;

/**
 * The ref type for a polymorphic component.
 */
export type PolymorphicRef<C extends As> =
  ComponentPropsWithRef<C>["ref"];

/**
 * Merges custom props with the props of the rendered element while allowing
 * the consumer to override the rendered element via the `as` prop.
 */
export type PolymorphicComponentProps<
  C extends As,
  Props extends object = object,
> = Props &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | "as"> & {
    as?: C;
  };

/**
 * Convenience type for components exposing an `as` prop and forwarding refs.
 */
export type PolymorphicPropsWithRef<
  C extends As,
  Props extends object = object,
> = PolymorphicComponentProps<C, Props> & {
  ref?: PolymorphicRef<C>;
};
