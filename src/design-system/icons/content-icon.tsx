import {
  FileText,
  FolderGit2,
  LayoutGrid,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type ContentIconName =
  | "article"
  | "page"
  | "project";

interface ContentIconProps {
  name: ContentIconName;
  className?: string;
}

const icons = {
  article: FileText,
  page: LayoutGrid,
  project: FolderGit2,
} as const;

export function ContentIcon({
  name,
  className,
}: ContentIconProps) {
  const Icon = icons[name];

  return (
    <Icon
      aria-hidden
      className={cn("size-4", className)}
    />
  );
}
