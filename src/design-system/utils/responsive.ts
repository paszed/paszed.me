import type { Breakpoint, ResponsiveValue } from "@/design-system/types/responsive";

const BREAKPOINTS: Breakpoint[] = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
];

/**
 * Returns true when the value contains breakpoint-specific entries.
 */
export function isResponsiveObject<T>(
  value: ResponsiveValue<T>,
): value is Partial<Record<Breakpoint, T>> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

/**
 * Resolves the value for a given breakpoint.
 *
 * Falls back to the nearest smaller breakpoint before finally using `base`.
 */
export function resolveResponsiveValue<T>(
  value: ResponsiveValue<T>,
  breakpoint: Breakpoint,
): T | undefined {
  if (!isResponsiveObject(value)) {
    return value;
  }

  const index = BREAKPOINTS.indexOf(breakpoint);

  for (let i = index; i >= 0; i--) {
    const candidate = value[BREAKPOINTS[i]];

    if (candidate !== undefined) {
      return candidate;
    }
  }

  return value.base;
}

/**
 * Normalizes a responsive value into a breakpoint map.
 */
export function normalizeResponsiveValue<T>(
  value: ResponsiveValue<T>,
): Partial<Record<Breakpoint, T>> {
  if (!isResponsiveObject(value)) {
    return {
      base: value,
    };
  }

  return value;
}
