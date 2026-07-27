import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

import { Inline } from "../layout";

type ActionBarProps =
  HTMLAttributes<HTMLDivElement>;

export function ActionBar({
  className,
  ...props
}: ActionBarProps) {
  return (
    <Inline
      justify="between"
      gap="lg"
      className={cn(
        "w-full",
        className,
      )}
      {...props}
    />
  );
}
