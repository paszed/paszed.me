import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type AvatarProps = HTMLAttributes<HTMLDivElement>;

export function Avatar({
  className,
  children,
  ...props
}: AvatarProps) {
  return (
    <div
      className={cn(
        [
          "flex size-10 shrink-0",
          "items-center justify-center",
          "overflow-hidden",
          "rounded-full",
          "border border-border",
          "bg-card",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
