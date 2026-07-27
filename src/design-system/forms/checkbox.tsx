"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { useOptionalFieldContext } from "./field";

export type CheckboxProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      className,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const field = useOptionalFieldContext();

    const describedBy = [
      field?.hasDescription
        ? field.descriptionId
        : undefined,

      field?.hasError
        ? field.errorId
        : undefined,

      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <input
        ref={ref}
        id={field?.id ?? props.id}
        type="checkbox"
        aria-describedby={
          describedBy || undefined
        }
        aria-invalid={
          props["aria-invalid"]
        }
        className={cn(
          [
            "h-4 w-4 shrink-0",
            "rounded",
            "border border-border",
            "text-accent",

            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-accent",
            "focus-visible:ring-offset-2",
            "focus-visible:ring-offset-background",

            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
          ],
          className,
        )}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
