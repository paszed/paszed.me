import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Stack } from "../layout";

interface PageHeaderProps
  extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function PageHeader({
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
        {children}
      </Stack>
    </header>
  );
}
