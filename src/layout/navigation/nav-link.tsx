import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export function NavLink({
  href,
  label,
  active = false,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={
        active ? "page" : undefined
      }
      className={cn(
        "group relative py-2 font-sans text-sm font-medium tracking-[0.015em] transition-colors duration-200",
        active
          ? "text-accent"
          : "text-fg-secondary hover:text-accent",
      )}
    >
      {label}

      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform duration-200",
          active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
