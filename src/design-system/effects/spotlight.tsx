import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type SpotlightProps = HTMLAttributes<HTMLDivElement>;

export function Spotlight({
  className,
  ...props
}: SpotlightProps) {
  return (
    <div
      className={cn(
        [
          "pointer-events-none",
          "absolute",
          "left-1/2",
          "top-0",
          "h-[32rem]",
          "w-[32rem]",
          "-translate-x-1/2",
          "rounded-full",
          "bg-accent/15",
          "blur-3xl",
        ],
        className,
      )}
      {...props}
    />
  );
}
