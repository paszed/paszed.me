import type { HTMLAttributes } from "react";

import { Stack } from "../layout";

import { cn } from "@/lib";

type PageHeaderProps = HTMLAttributes<HTMLElement>;

export function PageHeader({
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(className)}
      {...props}
    >
      <Stack gap="md">
        {props.children}
      </Stack>
    </header>
  );
}
