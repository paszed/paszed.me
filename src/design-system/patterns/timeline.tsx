import type { HTMLAttributes } from "react";

import { Stack } from "../layout";

type TimelineProps = HTMLAttributes<HTMLDivElement>;

export function Timeline({
  ...props
}: TimelineProps) {
  return (
    <Stack
      gap="lg"
      {...props}
    />
  );
}
