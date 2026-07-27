import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function IconButton({
  children,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        [
          "inline-flex",
          "size-10",
          "shrink-0",
          "items-center",
          "justify-center",
          "rounded-lg",
          "border border-border",
          "bg-surface",
          "text-fg",
          "transition-colors duration-200",
          "hover:border-accent",
          "hover:text-accent",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-accent/40",
          "disabled:pointer-events-none",
          "disabled:opacity-50",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
