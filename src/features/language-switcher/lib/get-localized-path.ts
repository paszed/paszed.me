import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

export function getLocalizedPath(
  pathname: string,
  locale: Locale,
) {
  if (!pathname) {
    return `/${locale}`;
  }

  const segments = pathname.split("/");

  if (
    locales.includes(
      segments[1] as Locale,
    )
  ) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  return segments.join("/");
}
