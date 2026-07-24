import type { HTMLAttributes, ReactNode } from "react";

import { Card } from "../primitives";
import { Stack } from "../layout";
import { Heading, Text } from "../typography";

interface SocialProofProps
  extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;
  label: string;
}

export function SocialProof({
  value,
  label,
  ...props
}: SocialProofProps) {
  return (
    <Card {...props}>
      <Stack gap="sm">
        <Heading as="h3">
          {value}
        </Heading>

        <Text muted>
          {label}
        </Text>
      </Stack>
    </Card>
  );
}
