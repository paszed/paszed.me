import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type MeshProps = HTMLAttributes<HTMLDivElement>;

export function Mesh({
  className,
  ...props
}: MeshProps) {
  return (
    <div
      className={cn(
        [
          "pointer-events-none",
          "absolute",
          "inset-0",
          "opacity-30",
          "[background-image:radial-gradient(circle_at_25%_25%,theme(colors.accent/15)_0%,transparent_45%),radial-gradient(circle_at_75%_40%,theme(colors.primary/15)_0%,transparent_45%)]",
        ],
        className,
      )}
      {...props}
    />
  );
}
