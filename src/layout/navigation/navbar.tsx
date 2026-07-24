"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { navigation } from "@/config/navigation";
import {
  ActionIcon,
  Button,
  Container,
  ThemeToggle,
} from "@/design-system";
import { useCommandPalette } from "@/features/search";
import { cn } from "@/lib/utils";

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
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
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
                          aria-hidden
                          className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <Button
                variant="outline"
                onClick={toggle}
                aria-label="Open search"
                aria-keyshortcuts="Meta+K Control+K"
                className="gap-3 rounded-xl bg-surface px-3 py-2 text-fg-secondary hover:border-accent hover:text-accent"
              >
                <ActionIcon name="search" />

                <span>Search</span>

                <kbd className="rounded border border-border px-2 py-0.5 text-xs text-fg-muted">
                  ⌘K
                </kbd>
              </Button>

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
