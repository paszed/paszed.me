import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  currentPath?: string;
}

export function NavLink({
  href,
  label,
  currentPath,
}: NavLinkProps) {
  const active =
    currentPath === href ||
    (href !== "/" &&
      currentPath?.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={
        active
          ? "page"
          : undefined
      }
      className={cn(
        [
          "group",
          "relative",
          "py-2",
          "text-sm",
          "font-medium",
          "tracking-[0.01em]",
          "transition-colors",
          "duration-200",
        ],
        active
          ? "text-accent"
          : "text-fg-secondary hover:text-fg",
      )}
    >
      {label}

      <span
        aria-hidden
        className={cn(
          [
            "absolute",
            "inset-x-0",
            "-bottom-px",
            "h-px",
            "origin-left",
            "bg-accent",
            "transition-transform",
            "duration-200",
          ],
          active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
