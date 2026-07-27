"use client";

import {
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

import { useOptionalFieldContext } from "./field";

export type InputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      className,
      id,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const field = useOptionalFieldContext();

    const describedBy = [
      field?.hasDescription
        ? field.descriptionId
        : undefined,

      field?.hasError && ariaInvalid
        ? field.errorId
        : undefined,

      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <input
        ref={ref}
        id={id ?? field?.id}
        aria-describedby={
          describedBy || undefined
        }
        aria-invalid={ariaInvalid}
        className={cn(
          [
            "flex h-10 w-full",
            "rounded-md",
            "border border-border",
            "bg-background",
            "px-3 py-2",
            "text-sm text-fg",
            "placeholder:text-fg-muted",

            "transition-colors",

            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-accent",
            "focus-visible:ring-offset-2",
            "focus-visible:ring-offset-background",

            "disabled:cursor-not-allowed",
            "disabled:opacity-50",

            "file:border-0",
            "file:bg-transparent",
            "file:text-sm",
            "file:font-medium",
          ],
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
