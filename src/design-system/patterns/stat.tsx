import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib";

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
  className,
  ...props
}: StatProps) {
  return (
    <Stack
      gap="sm"
      className={cn(className)}
      {...props}
    >
      <Text
        size="sm"
        muted
      >
        {label}
      </Text>

      <Heading as="h3">
        {value}
      </Heading>
    </Stack>
  );
}
