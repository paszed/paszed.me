import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib";

export interface FigureProps
  extends HTMLAttributes<HTMLElement> {
  caption?: ReactNode;
}

export function Figure({
  children,
  caption,
  className,
  ...props
}: FigureProps) {
  return (
    <figure
      className={cn(
        "space-y-3",
        className,
      )}
      {...props}
    >
      {children}

      {caption && (
        <figcaption className="text-sm text-fg-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
