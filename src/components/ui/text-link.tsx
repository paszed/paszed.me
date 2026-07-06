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
        "inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
