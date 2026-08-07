"use client";

import {
  ActionIcon,
  Button,
  ThemeToggle,
} from "@/design-system";
import { LanguageSwitcher } from "@/features/language-switcher";
import { useCommandPalette } from "@/features/search";

export function NavbarActions() {
  const { toggle } = useCommandPalette();

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        variant="outline"
        onClick={toggle}
        aria-label="Open search"
        aria-keyshortcuts="Meta+K Control+K"
        className="group gap-3 rounded-xl bg-surface px-3 py-2 text-fg-secondary transition-colors hover:border-accent hover:text-accent"
      >
        <ActionIcon name="search" />

        <span>
          Search
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
