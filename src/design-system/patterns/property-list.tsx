import type { HTMLAttributes } from "react";

import { Stack } from "../layout";

type PropertyListProps =
  HTMLAttributes<HTMLDListElement>;

export function PropertyList({
  className,
  ...props
}: PropertyListProps) {
  return (
    <dl
      className={className}
      {...props}
    >
      <Stack>{props.children}</Stack>
    </dl>
  );
}
