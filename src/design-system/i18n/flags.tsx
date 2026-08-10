import type { Locale } from "./locale";

export interface FlagProps {
  locale: Locale;
  className?: string;
}

export function Flags({
  locale,
  className,
}: FlagProps) {
  const flags: Record<Locale, string> = {
    en: "🇬🇧",
    de: "🇩🇪",
    hu: "🇭🇺",
  };

  return (
    <span
      className={className}
      aria-hidden="true"
    >
      {flags[locale]}
    </span>
  );
}
