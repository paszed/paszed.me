"use client";

import { createContext } from "react";

import type { Locale } from "./locale";
import type { TranslationDictionary } from "./translations";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: TranslationDictionary;
}

export const LanguageContext =
  createContext<LanguageContextValue | null>(null);
