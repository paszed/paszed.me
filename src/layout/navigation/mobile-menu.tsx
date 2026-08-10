"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { navigation } from "@/config/navigation";
import {
  ActionIcon,
  IconButton,
} from "@/design-system";
import { LanguageSwitcher } from "@/features/language-switcher";
import { localizePath } from "@/i18n/navigation";
import { getLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  labels: {
    open: string;
    close: string;
    navigation: string;
  };
  navigationLabels: Record<string, string>;
  contactLabel: string;
}

export function MobileMenu({
  labels,
  navigationLabels,
  contactLabel,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(
    pathname.split("/")[1],
  );
  const previousPathname = useRef(pathname);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    if (
      previousPathname.current !== pathname
    ) {
      previousPathname.current = pathname;
      closeMenu();
    }
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open]);

  const contactHref = localizePath(
    "/contact",
    locale,
  );

  return (
    <>
      <IconButton
        type="button"
        aria-label={
          open ? labels.close : labels.open
        }
        aria-expanded={open}
        onClick={() =>
          setOpen((value) => !value)
        }
        className={cn(
          "relative z-[70] rounded-full",
          "text-fg-secondary transition-colors duration-200",
          "hover:bg-muted hover:text-fg",
        )}
      >
        <ActionIcon
          name={open ? "close" : "menu"}
          className="size-5"
        />
      </IconButton>

      {open && (
        <button
          type="button"
          aria-label={labels.close}
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={cn(
          "absolute inset-x-0 top-full z-50 lg:hidden",
          open
            ? "pointer-events-auto"
            : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "mx-3 mt-3 overflow-hidden rounded-2xl border border-border",
            "bg-background/95 shadow-2xl backdrop-blur-xl",
            "transition-[opacity,transform] duration-200 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0",
          )}
        >
          <nav
            aria-label={labels.navigation}
            className="p-2"
          >
            <div className="flex flex-col">
              {navigation.map((item) => {
                const href = localizePath(
                  item.href,
                  locale,
                );

                const active =
                  pathname === href ||
                  (href !== "/" &&
                    pathname.startsWith(
                      `${href}/`,
                    ));

                return (
                  <Link
                    key={item.key}
                    href={href}
                    onClick={closeMenu}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium",
                      "transition-[background-color,color] duration-200",
                      active
                        ? "bg-muted text-fg"
                        : "text-fg-secondary hover:bg-muted hover:text-fg",
                    )}
                  >
                    {
                      navigationLabels[
                        item.key
                      ]
                    }
                  </Link>
                );
              })}
            </div>

            <div className="mt-2 border-t border-border p-3">
              <Link
                href={contactHref}
                onClick={closeMenu}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-fg
                  px-4
                  text-sm
                  font-semibold
                  text-background
                  transition-[background-color,transform]
                  duration-200
                  hover:bg-accent
                  hover:text-background
                  active:scale-[0.98]
                "
              >
                {contactLabel}
              </Link>
            </div>

            <div className="border-t border-border p-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
