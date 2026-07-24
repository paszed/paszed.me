import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbBrandGit,
  TbDatabase,
  TbTerminal2,
} from "react-icons/tb";

import { cn } from "@/lib/utils";

export type TechnologyIconName =
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "SQL"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "HTML"
  | "CSS"
  | "Node.js"
  | "REST APIs"
  | "PostgreSQL"
  | "Prisma"
  | "Git"
  | "Docker"
  | "GitHub"
  | "Linux"
  | "Terminal";

interface TechnologyIconProps {
  name: TechnologyIconName;
  className?: string;
}

const icons: Record<TechnologyIconName, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: TbDatabase,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  "REST APIs": TbApi,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Git: TbBrandGit,
  Docker: SiDocker,
  GitHub: SiGithub,
  Linux: SiLinux,
  Terminal: TbTerminal2,
};

export function TechnologyIcon({
  name,
  className,
}: TechnologyIconProps) {
  const Icon = icons[name];

  return (
    <Icon
      aria-hidden
      focusable="false"
      className={cn("size-4 shrink-0", className)}
    />
  );
}
