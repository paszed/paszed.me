import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  Heading,
} from "../typography";
import { cn } from "@/lib/utils";

import { Stack } from "../layout";

interface PageHeaderProps
  extends HTMLAttributes<HTMLElement> {
  title?: string;
  children?: ReactNode;
}

export function PageHeader({
  title,
  children,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        className,
      )}
      {...props}
    >
      <Stack gap="md">
        {title && (
          <Heading as="h1">
            {title}
          </Heading>
        )}

        {children}
      </Stack>
    </header>
  );
}
