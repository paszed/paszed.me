"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  localeFlags,
  localeNames,
  locales,
} from "@/i18n/config";

import { getLocaleFromPath } from "./lib/get-locale-from-path";
import { getLocalizedPath } from "./lib/get-localized-path";

export function LanguageSwitcher() {
  const pathname =
    usePathname() ?? "/";

  const [open, setOpen] =
    useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const currentLocale =
    getLocaleFromPath(pathname);

  useEffect(() => {
    function handleClick(
      event: MouseEvent,
    ) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick,
    );

    return function cleanup() {
      document.removeEventListener(
        "mousedown",
        handleClick,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <button
        type="button"
        onClick={() =>
          setOpen((value) => !value)
        }
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium transition-colors hover:bg-surface"
      >
        {localeFlags[currentLocale]}

        <span>
          {localeNames[currentLocale]}
        </span>

        <span aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-36 rounded-xl border border-border bg-background p-2 shadow-lg"
        >
          {locales
            .filter(
              (locale) =>
                locale !== currentLocale,
            )
            .map((locale) => (
              <Link
                key={locale}
                href={getLocalizedPath(
                  pathname,
                  locale,
                )}
                onClick={() =>
                  setOpen(false)
                }
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface"
              >
                <span>
                  {localeFlags[locale]}
                </span>

                <span>
                  {localeNames[locale]}
                </span>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
