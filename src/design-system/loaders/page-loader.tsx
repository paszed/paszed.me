import type { HTMLAttributes } from "react";

import { Spinner } from "../primitives";
import { Page } from "../layout";
import { cn } from "@/lib";

type PageLoaderProps = HTMLAttributes<HTMLElement>;

export function PageLoader({
  className,
  ...props
}: PageLoaderProps) {
  return (
    <Page
      className={cn(
        "flex min-h-[50vh] items-center justify-center",
        className,
      )}
      {...props}
    >
      <Spinner />
    </Page>
  );
}

