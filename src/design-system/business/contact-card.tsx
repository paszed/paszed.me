import type { HTMLAttributes, ReactNode } from "react";

import { Card } from "../primitives";
import { Stack } from "../layout";
import { Heading, Text } from "../typography";

interface ContactCardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export function ContactCard({
  title,
  description,
  children,
  ...props
}: ContactCardProps) {
  return (
    <Card {...props}>
      <Stack gap="md">
        <Heading as="h3">
          {title}
        </Heading>

        {description && (
          <Text muted>{description}</Text>
        )}

        {children}
      </Stack>
    </Card>
  );
}
