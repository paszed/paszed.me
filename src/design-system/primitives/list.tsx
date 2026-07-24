import type {
  HTMLAttributes,
  LiHTMLAttributes,
} from "react";

import { cn } from "@/lib";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  gap?: "sm" | "md" | "lg";
}

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  muted?: boolean;
}

const gaps = {
  sm: "space-y-2",
  md: "space-y-3",
  lg: "space-y-4",
};

export function List({
  className,
  gap = "md",
  ...props
}: ListProps) {
  return (
    <ul
      className={cn(gaps[gap], className)}
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
        muted ? "text-fg-secondary" : "text-fg",
        className,
      )}
      {...props}
    />
  );
}
