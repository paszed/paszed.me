"use client";

import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { navigation } from "@/config/navigation";
import {
  Container,
  ThemeToggle,
} from "@/design-system";

import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { NavbarActions } from "./navbar-actions";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-16 items-center justify-between sm:h-[4.25rem]"
        >
          <BrandLogo />

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={
                      pathname === item.href
                    }
                  />
                </li>
              ))}
            </ul>

            <NavbarActions />

            <div className="flex items-center gap-2 lg:hidden">
              <div className="rounded-xl border border-border bg-surface p-1">
                <ThemeToggle />
              </div>

              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
