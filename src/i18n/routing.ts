import {
  defaultLocale,
  locales,
  type Locale,
} from "./config";

export function isLocale(
  value: unknown,
): value is Locale {
  return (
    typeof value === "string" &&
    locales.includes(
      value as Locale,
    )
  );
}

export function getLocale(
  value?: unknown,
): Locale {
  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
