import type { HTMLAttributes } from "react";

import { Stack } from "../layout";
import { cn } from "@/lib";

type HeroProps = HTMLAttributes<HTMLElement>;

export function Hero({
  className,
  ...props
}: HeroProps) {
  return (
    <header
      className={cn(className)}
      {...props}
    >
      <Stack gap="lg">{props.children}</Stack>
    </header>
  );
}
