import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type CenterProps = HTMLAttributes<HTMLDivElement>;

export function Center({
  className,
  ...props
}: CenterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}
