"use client";

import { usePathname } from "next/navigation";

import { BrandLogo } from "@/brand";
import { navigation } from "@/config/navigation";
import { Container, ThemeToggle } from "@/design-system";
import { getDictionary } from "@/i18n/get-dictionary";
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

  const content = getDictionary(locale);

  return (
    <header>
      <Container>
        <nav
          aria-label={
            content.navigationLabels.navigation
          }
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
                  <li key={item.key}>
                    <NavLink
                      href={href}
                      label={
                        content.navigation[
                          item.key
                        ]
                      }
                      currentPath={pathname}
                    />
                  </li>
                );
              })}
            </ul>

            <NavbarActions
              searchLabel={
                content.navigationLabels.search
              }
            />

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <MobileMenu
                labels={
                  content.navigationLabels
                }
                navigationLabels={
                  content.navigation
                }
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
