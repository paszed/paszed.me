/**
 * Semantic color tokens used throughout the design system.
 *
 * Components should consume these tokens instead of hard-coded colors.
 * The actual values are provided by the application's CSS custom properties.
 */
export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",

  surface: "var(--surface)",
  surfaceForeground: "var(--surface-foreground)",

  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",

  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",

  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",

  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",

  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",

  success: "var(--success)",
  successForeground: "var(--success-foreground)",

  warning: "var(--warning)",
  warningForeground: "var(--warning-foreground)",

  destructive: "var(--destructive)",
  destructiveForeground: "var(--destructive-foreground)",

  info: "var(--info)",
  infoForeground: "var(--info-foreground)",
} as const;

/**
 * All available semantic color token names.
 */
export type ColorToken = keyof typeof colors;

/**
 * Returns the CSS variable associated with a semantic color token.
 */
export function color(token: ColorToken): string {
  return colors[token];
}
