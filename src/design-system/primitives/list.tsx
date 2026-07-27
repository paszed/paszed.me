import type {
  HTMLAttributes,
  LiHTMLAttributes,
} from "react";

import { cn } from "@/lib";

type ListGap = "sm" | "md" | "lg";

interface ListProps
  extends HTMLAttributes<HTMLUListElement> {
  gap?: ListGap;
}

interface ListItemProps
  extends LiHTMLAttributes<HTMLLIElement> {
  muted?: boolean;
}

const gaps: Record<ListGap, string> = {
  sm: "gap-2 space-y-2",
  md: "gap-3 space-y-3",
  lg: "gap-4 space-y-4",
};

export function List({
  className,
  gap = "md",
  ...props
}: ListProps) {
  return (
    <ul
      className={cn(
        "flex flex-col",
        gaps[gap],
        className,
      )}
      {...props}
    />
  );
}

export function ListItem({
  className,
  muted = false,
  ...props
}: ListItemProps) {
  return (
    <li
      className={cn(
        "font-sans",
        muted ? "text-fg-secondary" : "text-fg",
        className,
      )}
      {...props}
    />
  );
}
