import type { HTMLAttributes } from "react";

import { Panel } from "../primitives";
import { Text } from "../typography";

export type AlertProps = HTMLAttributes<HTMLDivElement>;

export function Alert({
  children,
  ...props
}: AlertProps) {
  return (
    <Panel {...props}>
      <Text>{children}</Text>
    </Panel>
  );
}
