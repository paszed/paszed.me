import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        [
          "inline-flex items-center justify-center",
          "rounded-md",
          "border border-transparent",
          "bg-accent text-background",
          "px-5 py-2.5",
          "font-sans text-sm font-medium tracking-[0.015em]",
          "transition-colors duration-200",
          "hover:bg-accent-hover",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-accent",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-background",
          "disabled:pointer-events-none",
          "disabled:opacity-50",
        ],
        className,
      )}
      {...props}
    />
  );
}
