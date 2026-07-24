import type { HTMLAttributes, ReactNode } from "react";

import { Cluster } from "../layout";
import { Text } from "../typography";

export interface KeyValueProps
  extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
}

export function KeyValue({
  label,
  value,
  className,
  ...props
}: KeyValueProps) {
  return (
    <Cluster
      className={["justify-between", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Text size="sm" muted>
        {label}
      </Text>

      <Text size="sm">
        {value}
      </Text>
    </Cluster>
  );
}
