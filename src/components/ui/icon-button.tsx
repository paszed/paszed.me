import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        [
          "inline-flex",
          "h-10",
          "w-10",
          "items-center",
          "justify-center",
          "rounded-lg",
          "border",
          "border-border",
          "bg-surface",
          "text-fg",
          "transition-all",
          "duration-200",
          "hover:border-accent",
          "hover:text-accent",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-accent/40",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
