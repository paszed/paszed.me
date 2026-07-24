/**
 * Supported responsive breakpoints used throughout the design system.
 *
 * These should align with the application's Tailwind configuration.
 */
export type Breakpoint =
  | "base"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

/**
 * A responsive value that can either be a single value or
 * an object keyed by breakpoints.
 *
 * Example:
 *
 * gap="md"
 *
 * gap={{
 *   base: "sm",
 *   md: "lg",
 *   xl: "2xl",
 * }}
 */
export type ResponsiveValue<T> =
  | T
  | Partial<Record<Breakpoint, T>>;

/**
 * Utility type for collections of responsive props.
 */
export type ResponsiveProps<T extends Record<string, unknown>> = {
  [K in keyof T]?: ResponsiveValue<T[K]>;
};
