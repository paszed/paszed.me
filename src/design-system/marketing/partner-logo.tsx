import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib";

export interface PartnerLogoProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PartnerLogo({
  children,
  className,
  ...props
}: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center opacity-70 transition-opacity hover:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
