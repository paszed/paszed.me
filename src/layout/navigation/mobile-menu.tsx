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
  navigationLabels: {
    home: string;
    services: string;
    work: string;
    about: string;
    contact: string;
  };
}

export function MobileMenu({
  labels,
  navigationLabels,
}: MobileMenuProps) {
  const [open, setOpen] =
    useState(false);

  const pathname = usePathname();

  const locale = getLocale(
    pathname.split("/")[1],
  );

  const previousPathname =
    useRef(pathname);

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

  return (
    <>
      <IconButton
        type="button"
        aria-label={
          open
            ? labels.close
            : labels.open
        }
        aria-expanded={open}
        onClick={() =>
          setOpen((value) => !value)
        }
        className="relative z-[70] rounded-xl transition-colors hover:bg-surface"
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
          className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm md:hidden"
        />
      )}

      <div
        className={cn(
          [
            "absolute",
            "inset-x-0",
            "top-full",
            "z-50",
            "mt-2",
            "md:hidden",
          ],
          open
            ? "pointer-events-auto"
            : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            [
              "mx-4",
              "overflow-hidden",
              "rounded-2xl",
              "border",
              "border-border",
              "bg-background",
              "shadow-xl",
              "transition-all",
              "duration-200",
            ],
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0",
          )}
        >
          <nav
            aria-label={labels.navigation}
            className="flex flex-col gap-1 p-2"
          >
            {navigation.map((item) => {
              const href = localizePath(
                item.href,
                locale,
              );

              const active =
                pathname === href;

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
                    [
                      "rounded-xl",
                      "px-4",
                      "py-2.5",
                      "text-sm",
                      "font-medium",
                      "transition-colors",
                    ],
                    active
                      ? "bg-surface text-accent"
                      : "text-fg-secondary hover:bg-surface hover:text-fg",
                  )}
                >
                  {navigationLabels[
                    item.key
                  ]}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-border px-4 py-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
