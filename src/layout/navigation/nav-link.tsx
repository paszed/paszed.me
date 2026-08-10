"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({
  href,
  label,
}: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" &&
      pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={
        active ? "page" : undefined
      }
      className={cn(
        "group relative inline-flex py-2 text-sm font-medium tracking-[0.01em]",
        "transition-colors duration-200",
        active
          ? "text-fg"
          : "text-fg-secondary hover:text-fg",
      )}
    >
      {label}

      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 bottom-0 h-px origin-left bg-accent",
          "transition-transform duration-200 ease-out",
          active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
