"use client";

import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { navigation } from "@/config/navigation";
import { Container, ThemeToggle } from "@/design-system";
import { localizePath } from "@/i18n/navigation";
import { getLocale } from "@/i18n/routing";

import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { NavbarActions } from "./navbar-actions";

export function Navbar() {
  const pathname = usePathname();

  const locale = getLocale(
    pathname.split("/")[1],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-[4.5rem] items-center justify-between"
        >
          <BrandLogo />

          <div className="flex items-center gap-4">
            <ul className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => {
                const href = localizePath(
                  item.href,
                  locale,
                );

                return (
                  <li key={item.href}>
                    <NavLink
                      href={href}
                      label={item.label}
                      currentPath={pathname}
                    />
                  </li>
                );
              })}
            </ul>

            <NavbarActions />

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
