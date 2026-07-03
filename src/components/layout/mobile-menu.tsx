"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-[70] rounded-xl border border-border bg-surface p-2 transition-colors hover:bg-card"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
        />
      )}

      <div
        className={cn(
          "absolute inset-x-0 top-full z-50 mt-2 md:hidden",
          open
            ? "pointer-events-auto"
            : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "mx-4 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-200",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0",
          )}
        >
          <nav className="flex flex-col p-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                    active
                      ? "bg-surface text-accent"
                      : "text-fg hover:bg-surface hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
