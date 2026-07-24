import type { ReactNode } from "react";

import {
  Stack,
  Text,
} from "@/design-system";

interface CalloutProps {
  children: ReactNode;
}

export function Callout({
  children,
}: CalloutProps) {
  return (
    <Stack
      as="aside"
      className="my-8 rounded-2xl border border-border bg-card px-6 py-5"
    >
      <Text muted>
        {children}
      </Text>
    </Stack>
  );
}
