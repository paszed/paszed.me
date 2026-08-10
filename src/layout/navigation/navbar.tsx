import type { Locale } from "@/i18n/config";

import { BrandLogo } from "@/brand";
import { navigation } from "@/config/navigation";
import { Container } from "@/design-system";
import { getDictionary } from "@/i18n/get-dictionary";
import { localizePath } from "@/i18n/navigation";

import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { NavbarActions } from "./navbar-actions";

interface NavbarProps {
  locale: Locale;
}

export function Navbar({
  locale,
}: NavbarProps) {
  const content = getDictionary(locale);

  return (
    <header>
      <Container>
        <nav
          aria-label={
            content.navigationLabels.navigation
          }
          className="flex h-16 items-center justify-between"
        >
          <BrandLogo />

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
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
                    />
                  </li>
                );
              })}
            </ul>

            <NavbarActions
              contactLabel={
                content.navigation.contact
              }
              locale={locale}
            />
          </div>

          <div className="flex items-center lg:hidden">
            <MobileMenu
              labels={
                content.navigationLabels
              }
              navigationLabels={
                content.navigation
              }
              contactLabel={
                content.navigation.contact
              }
            />
          </div>
        </nav>
      </Container>
    </header>
  );
}
