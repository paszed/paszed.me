"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { useOptionalFieldContext } from "./field";

export type RadioProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = forwardRef<
  HTMLInputElement,
  RadioProps
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
        type="radio"
        aria-describedby={
          describedBy || undefined
        }
        className={cn(
          "h-4 w-4 shrink-0 rounded-full border border-input",
          "text-primary",
          "ring-offset-background",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-ring",
          "focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Radio.displayName = "Radio";
