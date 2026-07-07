"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { BrandLogo } from "@/brand";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";
import { useCommandPalette } from "@/features/search/context";
import { cn } from "@/lib/utils";

import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const { toggle } = useCommandPalette();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-18 items-center justify-between"
        >
          <BrandLogo />

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-10 md:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative font-sans text-sm font-medium tracking-[0.015em] transition-colors duration-200",
                        active
                          ? "text-accent"
                          : "text-fg-secondary hover:text-accent",
                      )}
                    >
                      {item.label}

                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggle}
                aria-label="Open search"
                aria-keyshortcuts="Meta+K Control+K"
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <Search className="h-4 w-4" />

                <span>Search</span>

                <kbd className="rounded border border-border px-2 py-0.5 text-xs text-fg-muted">
                  ⌘K
                </kbd>
              </button>

              <div className="rounded-xl border border-border bg-surface p-1">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
