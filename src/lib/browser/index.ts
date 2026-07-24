/**
 * Returns whether the current runtime has access to browser APIs.
 */
export function isBrowser(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof document !== "undefined"
  );
}

/**
 * Returns the current browser window when available.
 *
 * Useful for code that may also execute during SSR.
 */
export function getWindow(): Window | undefined {
  return typeof window !== "undefined"
    ? window
    : undefined;
}

/**
 * Returns the current document when available.
 *
 * Useful for code that may also execute during SSR.
 */
export function getDocument(): Document | undefined {
  return typeof document !== "undefined"
    ? document
    : undefined;
}

/**
 * Returns whether the browser supports a given media query.
 */
export function matchesMedia(query: string): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }

  return window.matchMedia(query).matches;
}

/**
 * Copies text to the system clipboard.
 *
 * Returns false when the Clipboard API is unavailable.
 */
export async function copyToClipboard(
  value: string,
): Promise<boolean> {
  if (
    typeof navigator === "undefined" ||
    !navigator.clipboard
  ) {
    return false;
  }

  await navigator.clipboard.writeText(value);

  return true;
}
