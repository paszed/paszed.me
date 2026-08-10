"use client";

import {
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import {
  defaultLocale,
  type Locale,
} from "./locale";
import { LanguageContext } from "./language-context";
import { de, en, hu } from "./locales";

const dictionaries = {
  en,
  de,
  hu,
} as const;

export interface LanguageProviderProps
  extends PropsWithChildren {
  defaultLanguage?: Locale;
}

export function LanguageProvider({
  children,
  defaultLanguage = defaultLocale,
}: LanguageProviderProps) {
  const [locale, setLocale] =
    useState<Locale>(defaultLanguage);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      translations: dictionaries[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
