import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

import { Grid } from "../layout";

interface CardGridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3;
}

export function CardGrid({
  className,
  columns = 2,
  ...props
}: CardGridProps) {
  return (
    <Grid
      columns={columns}
      gap="lg"
      className={cn(
        "items-stretch",
        className,
      )}
      {...props}
    />
  );
}
