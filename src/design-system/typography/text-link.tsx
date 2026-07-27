import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TextLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children?: ReactNode;
}

export function TextLink({
  children,
  className,
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        [
          "inline-flex items-center gap-2",
          "font-sans text-sm font-medium",
          "text-fg",
          "transition-colors duration-200",
          "hover:text-accent",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-accent",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-background",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
