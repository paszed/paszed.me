"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface FieldContextValue {
  id: string;
  descriptionId: string;
  errorId: string;
  hasDescription: boolean;
  hasError: boolean;
  setHasDescription: (value: boolean) => void;
  setHasError: (value: boolean) => void;
}

const FieldContext =
  createContext<FieldContextValue | null>(null);

export function useFieldContext() {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error(
      "Field components must be used within <Field />.",
    );
  }

  return context;
}

export function useOptionalFieldContext() {
  return useContext(FieldContext);
}

interface FieldProps {
  children: ReactNode;
  className?: string;
}

export function Field({
  children,
  className,
}: FieldProps) {
  const id = useId();

  const [hasDescription, setHasDescription] =
    useState(false);

  const [hasError, setHasError] =
    useState(false);

  const value: FieldContextValue = {
    id,
    descriptionId: `${id}-description`,
    errorId: `${id}-error`,
    hasDescription,
    hasError,
    setHasDescription,
    setHasError,
  };

  return (
    <FieldContext.Provider value={value}>
      <div
        className={cn(
          "space-y-2",
          className,
        )}
      >
        {children}
      </div>
    </FieldContext.Provider>
  );
}

export type FieldLabelProps =
  React.LabelHTMLAttributes<HTMLLabelElement>;

export function FieldLabel({
  className,
  ...props
}: FieldLabelProps) {
  const { id } = useFieldContext();

  return (
    <label
      htmlFor={id}
      className={cn(
        "text-sm font-medium leading-none text-fg",
        className,
      )}
      {...props}
    />
  );
}

export type FieldDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  const {
    descriptionId,
    setHasDescription,
  } = useFieldContext();

  useEffect(() => {
    setHasDescription(true);

    return () => {
      setHasDescription(false);
    };
  }, [setHasDescription]);

  return (
    <p
      id={descriptionId}
      className={cn(
        "text-fg-muted text-sm",
        className,
      )}
      {...props}
    />
  );
}

export type FieldErrorProps =
  React.HTMLAttributes<HTMLParagraphElement>;

export function FieldError({
  className,
  ...props
}: FieldErrorProps) {
  const {
    errorId,
    setHasError,
  } = useFieldContext();

  useEffect(() => {
    setHasError(true);

    return () => {
      setHasError(false);
    };
  }, [setHasError]);

  return (
    <p
      id={errorId}
      className={cn(
        "text-danger text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}
