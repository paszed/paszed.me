import type { HTMLAttributes, ReactNode } from "react";

import { Stack } from "../layout";
import {
  Heading,
  Text,
} from "../typography";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
}

export function Stat({
  label,
  value,
  ...props
}: StatProps) {
  return (
    <Stack
      gap="sm"
      {...props}
    >
      <Text
        size="sm"
        muted
      >
        {label}
      </Text>

      <Heading as="h3">{value}</Heading>
    </Stack>
  );
}
