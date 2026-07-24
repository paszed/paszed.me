import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Card } from "../primitives";
import { Stack } from "../layout";
import { Heading, Text } from "../typography";

export interface ServiceCardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
}

export function ServiceCard({
  title,
  description,
  icon,
  ...props
}: ServiceCardProps) {
  return (
    <Card {...props}>
      <Stack gap="md">
        {icon}

        <Heading as="h3">
          {title}
        </Heading>

        <Text muted>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
