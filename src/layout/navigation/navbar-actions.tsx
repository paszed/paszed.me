"use client";

import {
  ActionIcon,
  Button,
  ThemeToggle,
} from "@/design-system";
import { LanguageSwitcher } from "@/features/language-switcher";

interface NavbarActionsProps {
  searchLabel: string;
}

export function NavbarActions({
  searchLabel,
}: NavbarActionsProps) {
  const { toggle } =
    useCommandPalette();

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        className="group"
        onClick={toggle}
        aria-label={searchLabel}
      >
        <ActionIcon name="search" />

        <span>
          {searchLabel}
        </span>

        <kbd className="rounded-md border border-border px-1.5 py-0.5 text-[11px] text-fg-muted transition-colors group-hover:border-accent/40">
          ⌘K
        </kbd>
      </Button>

      <LanguageSwitcher />

      <div className="rounded-xl border border-border bg-surface p-1">
        <ThemeToggle />
      </div>
    </div>
  );
}
