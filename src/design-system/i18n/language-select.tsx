"use client";

import { Button } from "../primitives";

import { Flags } from "./flags";
import { localeNames, locales } from "./locale";
import { useLanguage } from "./use-language";

export interface LanguageSelectProps {
  className?: string;
}

export function LanguageSelect({
  className,
}: LanguageSelectProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={className}>
      <label className="sr-only" htmlFor="language-select">
        Language
      </label>

      <select
        id="language-select"
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="hidden"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>

      <Button
        variant="outline"
        onClick={() => {
          const current = locales.indexOf(locale);
          const next = locales[(current + 1) % locales.length];
          setLocale(next);
        }}
      >
        <Flags locale={locale} />
        <span className="ml-2">{localeNames[locale]}</span>
      </Button>
    </div>
  );
}
