import type { TableHTMLAttributes } from "react";

import { cn } from "@/lib";

export type TableProps =
  TableHTMLAttributes<HTMLTableElement>;

export function Table({
  className,
  ...props
}: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse text-left",
          className,
        )}
        {...props}
      />
    </div>
  );
}
