import type { HTMLAttributes } from "react";

import {
  Center,
  Stack,
} from "../layout";
import {
  Heading,
  Text,
} from "../typography";

import { cn } from "@/lib";

interface EmptyStateProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function EmptyState({
  title,
  description,
  children,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Center
      className={cn("py-16", className)}
      {...props}
    >
      <Stack gap="md">
        <Heading as="h2">
          {title}
        </Heading>

        {description && (
          <Text muted>{description}</Text>
        )}

        {children}
      </Stack>
    </Center>
  );
}
