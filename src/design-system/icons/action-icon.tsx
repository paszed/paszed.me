import {
  ArrowUpRight,
  Menu,
  Search,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type ActionIconName =
  | "close"
  | "menu"
  | "open"
  | "search";

interface ActionIconProps {
  name: ActionIconName;
  className?: string;
}

const icons: Record<ActionIconName, LucideIcon> = {
  close: X,
  menu: Menu,
  open: ArrowUpRight,
  search: Search,
};

export function ActionIcon({
  name,
  className,
}: ActionIconProps) {
  const Icon = icons[name];

  return (
    <Icon
      aria-hidden
      className={cn("size-4", className)}
    />
  );
}
