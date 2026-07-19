import type { HTMLAttributes } from "react";

type SidebarProps = HTMLAttributes<HTMLDivElement>;

export function Sidebar({
  children,
}: SidebarProps) {
  return <>{children}</>;
}
