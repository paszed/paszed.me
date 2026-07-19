import type { HTMLAttributes } from "react";

import { Inline } from "../layout";
import { cn } from "@/lib";

type ActionBarProps = HTMLAttributes<HTMLDivElement>;

export function ActionBar({
  className,
  ...props
}: ActionBarProps) {
  return (
    <Inline
      justify="between"
      className={cn(className)}
      {...props}
    />
  );
}
