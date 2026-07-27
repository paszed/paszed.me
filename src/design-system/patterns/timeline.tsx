import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

import { Stack } from "../layout";

type TimelineProps =
  HTMLAttributes<HTMLDivElement>;

export function Timeline({
  className,
  ...props
}: TimelineProps) {
  return (
    <Stack
      gap="lg"
      className={cn(
        "relative",
        className,
      )}
      {...props}
    />
  );
}
