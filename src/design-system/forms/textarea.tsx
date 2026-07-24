"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { useOptionalFieldContext } from "./field";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
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
      <textarea
        ref={ref}
        id={field?.id ?? props.id}
        aria-describedby={
          describedBy || undefined
        }
        aria-invalid={
          props["aria-invalid"]
        }
        className={cn(
          "flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2",
          "text-sm placeholder:text-muted-foreground",
          "ring-offset-background",
          "transition-colors",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-ring",
          "focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
          "resize-y",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
