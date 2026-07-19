import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface ClusterProps
  extends HTMLAttributes<HTMLDivElement> {
  gap?: "sm" | "md" | "lg";
}

const gaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

export function Cluster({
  className,
  gap = "md",
  ...props
}: ClusterProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gaps[gap],
        className,
      )}
      {...props}
    />
  );
}
