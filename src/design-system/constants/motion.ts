/**
 * Standard motion durations (milliseconds).
 */
export const duration = {
  instant: 0,
  faster: 100,
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const;

/**
 * Standard easing functions.
 */
export const easing = {
  linear: "linear",
  ease: "ease",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

/**
 * Common transition presets.
 */
export const transition = {
  default: `${duration.normal}ms ${easing.easeInOut}`,
  fast: `${duration.fast}ms ${easing.easeOut}`,
  slow: `${duration.slow}ms ${easing.easeInOut}`,
} as const;

/**
 * Shared animation values.
 */
export const animation = {
  fadeDistance: 8,
  scaleFrom: 0.96,
  staggerDelay: 50,
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;
export type TransitionToken = keyof typeof transition;
