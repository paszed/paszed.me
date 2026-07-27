import { Loader2 } from "lucide-react";

import { cn } from "@/lib";

interface SpinnerProps {
  className?: string;
  label?: string;
}

export function Spinner({
  className,
  label = "Loading",
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center",
        className,
      )}
    >
      <Loader2
        aria-hidden
        className="size-4 animate-spin"
      />
    </span>
  );
}
