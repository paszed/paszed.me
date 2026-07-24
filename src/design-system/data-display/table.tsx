import type {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

import { cn } from "@/lib";

export type TableProps =
  TableHTMLAttributes<HTMLTableElement>;

export type TableBodyProps =
  HTMLAttributes<HTMLTableSectionElement>;

export type TableRowProps =
  HTMLAttributes<HTMLTableRowElement>;

export type TableHeadProps =
  ThHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps =
  TdHTMLAttributes<HTMLTableCellElement>;

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

export function TableBody(
  props: TableBodyProps,
) {
  return <tbody {...props} />;
}

export function TableRow({
  className,
  ...props
}: TableRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-border last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({
  className,
  ...props
}: TableHeadProps) {
  return (
    <th
      className={cn(
        "px-4 py-3 align-top font-medium text-fg",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: TableCellProps) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-fg-secondary",
        className,
      )}
      {...props}
    />
  );
}
