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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl dark:border-neutral-800 dark:bg-black/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
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
                        "relative text-sm font-medium transition-colors",
                        active
                          ? "text-green-500"
                          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                      )}
                    >
                      {item.label}

                      <span
                        className={cn(
                          "absolute -bottom-2 left-0 h-0.5 rounded-full bg-green-500 transition-all duration-200",
                          active ? "w-full" : "w-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
