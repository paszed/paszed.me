import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type LightboxProps = HTMLAttributes<HTMLDivElement>;

export function Lightbox({
  className,
  ...props
}: LightboxProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
