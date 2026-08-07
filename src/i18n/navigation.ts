import type { Locale } from "./config";

export function localizePath(
  href: string,
  locale: Locale,
) {
  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}
