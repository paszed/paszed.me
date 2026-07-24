"use client";

import {
  forwardRef,
  useState,
  type ChangeEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useOptionalFieldContext } from "./field";

export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(
  (
    {
      className,
      "aria-describedby": ariaDescribedBy,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref,
  ) => {
    const field = useOptionalFieldContext();

    const [internalChecked, setInternalChecked] =
      useState(defaultChecked ?? false);

    const isControlled = checked !== undefined;
    const isChecked = isControlled
      ? checked
      : internalChecked;

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

    function handleChange(
      event: ChangeEvent<HTMLInputElement>,
    ) {
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }

      onChange?.(event);
    }

    return (
      <input
        ref={ref}
        id={field?.id ?? props.id}
        type="checkbox"
        role="switch"
        checked={isChecked}
        aria-checked={isChecked}
        aria-describedby={
          describedBy || undefined
        }
        aria-invalid={
          props["aria-invalid"]
        }
        className={cn(
          "peer sr-only",
          className,
        )}
        onChange={handleChange}
        {...props}
      />
    );
  },
);

Switch.displayName = "Switch";
