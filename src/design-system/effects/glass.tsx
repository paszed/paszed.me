import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type GlassProps = HTMLAttributes<HTMLDivElement>;

export function Glass({
  className,
  ...props
}: GlassProps) {
  return (
    <div
      className={cn(
        [
          "rounded-xl",
          "border",
          "border-white/10",
          "bg-white/5",
          "backdrop-blur-xl",
        ],
        className,
      )}
      {...props}
    />
  );
}
