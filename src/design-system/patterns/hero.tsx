import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib";

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
        "relative",
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
