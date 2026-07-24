import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type GalleryProps = HTMLAttributes<HTMLDivElement>;

export function Gallery({
  className,
  ...props
}: GalleryProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    />
  );
}
