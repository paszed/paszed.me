import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type IconProps = HTMLAttributes<HTMLSpanElement>;

export function Icon({
  className,
  ...props
}: IconProps) {
  return (
    <span
      className={cn(
        [
          "inline-flex",
          "shrink-0",
          "items-center",
          "justify-center",
        ],
        className,
      )}
      {...props}
    />
  );
}
