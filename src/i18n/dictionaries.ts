import type { Locale } from "./config";

import { de } from "@/content/de";
import { en } from "@/content/en";
import { hu } from "@/content/hu";

export const dictionaries = {
  en,
  de,
  hu,
} satisfies Record<
  Locale,
  unknown
>;
