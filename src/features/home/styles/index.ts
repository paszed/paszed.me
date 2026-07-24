/**
 * Shared layout styles for home page sections.
 *
 * These classes capture recurring composition patterns used across
 * the home feature while leaving component-specific styling local.
 */
export const homeStyles = {
  threeColumnGrid: "grid gap-8 md:grid-cols-3",
  twoColumnGrid: "grid gap-8 xl:grid-cols-2",
  writingGrid: "grid gap-8",
} as const;

export type HomeStyle = keyof typeof homeStyles;
