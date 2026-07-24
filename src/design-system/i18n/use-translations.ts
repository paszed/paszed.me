"use client";

import { useLanguage } from "./use-language";

export function useTranslations() {
  const { translations } = useLanguage();

  return translations;
}
