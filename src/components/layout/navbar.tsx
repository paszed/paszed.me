"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/cn";

import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          <BrandLogo />

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-10 md:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative font-sans text-sm font-medium tracking-[0.015em] transition-colors duration-200",
                        active
                          ? "text-accent"
                          : "text-fg-secondary hover:text-accent",
                      )}
                    >
                      {item.label}

                      {active && (
                        <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="ml-3 rounded-xl border border-border bg-surface p-1">
              <ThemeToggle />
            </div>

            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
