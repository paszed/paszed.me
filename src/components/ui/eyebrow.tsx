import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export function Eyebrow({
  children,
  className,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-xs font-medium uppercase tracking-[0.35em] text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
