"use client";

import { Button } from "../primitives";

import { Flags } from "./flags";
import { locales } from "./locale";
import { useLanguage } from "./use-language";

export interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  const currentIndex = locales.indexOf(locale);
  const nextLocale = locales[(currentIndex + 1) % locales.length];

  return (
    <Button
      className={className}
      variant="ghost"
      onClick={() => setLocale(nextLocale)}
    >
      <Flags locale={locale} />
    </Button>
  );
}
