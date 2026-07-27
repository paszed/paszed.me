import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: [
    "border-transparent",
    "bg-accent text-background",
    "hover:bg-accent-hover",
    "shadow-sm",
  ].join(" "),

  outline: [
    "border-border",
    "bg-transparent text-foreground",
    "hover:border-accent/50",
    "hover:bg-surface",
  ].join(" "),

  ghost: [
    "border-transparent",
    "bg-transparent text-foreground",
    "hover:bg-surface",
  ].join(" "),
};

export function Button({
  className,
  type = "button",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        [
          "inline-flex items-center justify-center",
          "rounded-lg border",
          "px-5 py-2.5",
          "font-sans text-sm font-medium tracking-[0.015em]",
          "transition-colors duration-200",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-accent",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-background",
          "disabled:pointer-events-none",
          "disabled:opacity-50",
        ],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
