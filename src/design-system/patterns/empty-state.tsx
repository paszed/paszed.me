import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

import {
  Center,
  Stack,
} from "../layout";
import {
  Heading,
  Text,
} from "../typography";

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
      className={cn(
        "min-h-64 py-16 text-center",
        className,
      )}
      {...props}
    >
      <Stack
        gap="md"
        className="items-center"
      >
        <Heading as="h2">
          {title}
        </Heading>

        {description && (
          <Text
            muted
            className="max-w-md"
          >
            {description}
          </Text>
        )}

        {children}
      </Stack>
    </Center>
  );
}
