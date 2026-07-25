import type { IconType } from "react-icons";
import {
  SiCss,
  SiDocker,
  SiFishshell,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNeovim,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import {
  TbApi,
  TbBrandGit,
  TbBrowser,
  TbDatabase,
  TbKey,
  TbTerminal2,
  TbWebhook,
} from "react-icons/tb";

import { cn } from "@/lib/utils";

export type TechnologyIconName =
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "SQL"
  | "Go"
  | "Rust"
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
  | "GitHub Actions"
  | "Linux"
  | "Terminal"
  | "Webhooks"
  | "OAuth"
  | "Neovim"
  | "Fish"
  | "pnpm"
  | "Vitest"
  | "Playwright";

interface TechnologyIconProps {
  name: TechnologyIconName;
  className?: string;
}

const icons: Record<TechnologyIconName, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  SQL: TbDatabase,
  Go: SiGo,
  Rust: SiRust,
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
  "GitHub Actions": SiGithubactions,
  Linux: SiLinux,
  Terminal: TbTerminal2,
  Webhooks: TbWebhook,
  OAuth: TbKey,
  Neovim: SiNeovim,
  Fish: SiFishshell,
  pnpm: SiPnpm,
  Vitest: SiVitest,
  Playwright: TbBrowser,
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
