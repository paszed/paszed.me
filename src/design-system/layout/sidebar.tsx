import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib";

interface SidebarProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Sidebar({
  children,
  className,
  ...props
}: SidebarProps) {
  return (
    <div
      className={cn(
        "grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
