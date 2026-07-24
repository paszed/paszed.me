import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

export type CarouselProps = HTMLAttributes<HTMLDivElement>;

export function Carousel({
  className,
  ...props
}: CarouselProps) {
  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2",
        "[&>*]:shrink-0 [&>*]:snap-start",
        className,
      )}
      {...props}
    />
  );
}
