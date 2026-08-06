import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Stack } from "../layout";

interface HeroProps
  extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function Hero({
  children,
  className,
  ...props
}: HeroProps) {
  return (
    <header
      className={cn(
        className,
      )}
      {...props}
    >
      <Stack gap="lg">
        {children}
      </Stack>
    </header>
  );
}
