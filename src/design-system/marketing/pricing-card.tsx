import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Card } from "../primitives";
import { Stack } from "../layout";
import { Heading, Text } from "../typography";

export interface PricingCardProps
  extends HTMLAttributes<HTMLDivElement> {
  name: string;
  price: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PricingCard({
  name,
  price,
  description,
  children,
  ...props
}: PricingCardProps) {
  return (
    <Card {...props}>
      <Stack gap="lg">
        <Heading as="h3">
          {name}
        </Heading>

        <Heading as="h2">
          {price}
        </Heading>

        {description && (
          <Text muted>
            {description}
          </Text>
        )}

        {children}
      </Stack>
    </Card>
  );
}
