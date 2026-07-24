import type { Locale } from "./locale";

export interface FlagProps {
  locale: Locale;
  className?: string;
}

export function Flags({ locale, className }: FlagProps) {
  const flags: Record<Locale, string> = {
    en: "🇬🇧",
    de: "🇩🇪",
    es: "🇪🇸",
    fr: "🇫🇷",
    hu: "🇭🇺",
  };

  return (
    <span
      className={className}
      aria-hidden="true"
      role="img"
    >
      {flags[locale]}
    </span>
  );
}
