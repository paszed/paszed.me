import type { HTMLAttributes } from "react";

import { Stack } from "../layout";
import { Skeleton } from "../feedback";
import { cn } from "@/lib";

type ContentLoaderProps = HTMLAttributes<HTMLDivElement>;

export function ContentLoader({
  className,
  ...props
}: ContentLoaderProps) {
  return (
    <Stack
      className={cn(className)}
      gap="md"
      {...props}
    >
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </Stack>
  );
}

