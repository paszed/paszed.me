import type { HTMLAttributes } from "react";

import { Cluster } from "../layout";

export type ShareGroupProps =
  HTMLAttributes<HTMLDivElement>;

export function ShareGroup(
  props: ShareGroupProps,
) {
  return (
    <Cluster
      gap="sm"
      {...props}
    />
  );
}
