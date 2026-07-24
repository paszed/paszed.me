import type { HTMLAttributes } from "react";

import { cn } from "@/lib";

type NoiseProps = HTMLAttributes<HTMLDivElement>;

export function Noise({
  className,
  ...props
}: NoiseProps) {
  return (
    <div
      className={cn(
        [
          "pointer-events-none",
          "absolute",
          "inset-0",
          "opacity-[0.03]",
          "[background-image:url('/noise.png')]",
          "[background-repeat:repeat]",
        ],
        className,
      )}
      {...props}
    />
  );
}
