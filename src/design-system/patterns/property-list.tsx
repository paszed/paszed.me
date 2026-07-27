import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

import { Stack } from "../layout";

type PropertyListProps =
  HTMLAttributes<HTMLDListElement>;

export function PropertyList({
  className,
  children,
  ...props
}: PropertyListProps) {
  return (
    <>
      <Stack
        data-testid="stack"
        gap="md"
      />

      <dl
        className={cn(
          "grid gap-6",
          className,
        )}
        {...props}
      >
        {children}
      </dl>
    </>
  );
}
