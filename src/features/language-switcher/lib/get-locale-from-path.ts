import {
  locales,
  type Locale,
} from "@/i18n/config";

export function getLocaleFromPath(
  pathname: string,
): Locale {
  const segment =
    pathname.split("/")[1];

  if (
    locales.includes(
      segment as Locale,
    )
  ) {
    return segment as Locale;
  }

  return "en";
}
