"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/cn";

import { Container } from "./container";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[4.5rem] items-center justify-between">
          <BrandLogo />

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors duration-200",
                        active
                          ? "text-accent"
                          : "text-muted hover:text-accent",
                      )}
                    >
                      {item.label}

                      {active && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-xl border border-border bg-surface p-1">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
