import type { VideoHTMLAttributes } from "react";

import { cn } from "@/lib";

export type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export function Video({
  className,
  controls = true,
  ...props
}: VideoProps) {
  return (
    <video
      controls={controls}
      className={cn(
        "w-full rounded-xl border border-border-muted",
        className,
      )}
      {...props}
    />
  );
}
