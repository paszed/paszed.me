"use client";

import Link from "next/link";

import { ThemeToggle } from "@/design-system";
import { LanguageSwitcher } from "@/features/language-switcher";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/navigation";

interface NavbarActionsProps {
  contactLabel: string;
  locale: Locale;
}

export function NavbarActions({
  contactLabel,
  locale,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <LanguageSwitcher />

      <ThemeToggle />

      <Link
        href={localizePath("/contact", locale)}
        className="
          inline-flex
          h-9
          items-center
          justify-center
          rounded-full
          bg-fg
          px-4
          text-xs
          font-semibold
          text-background
          transition-[transform,background-color,opacity]
          duration-200
          hover:bg-accent
          hover:text-background
          active:scale-[0.97]
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-accent
        "
      >
        {contactLabel}
      </Link>
    </div>
  );
}
