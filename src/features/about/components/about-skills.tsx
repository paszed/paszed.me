import {
  SiCss,
  SiDocker,
  SiFigma,
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
import { TbApi, TbBrandGit, TbDatabase } from "react-icons/tb";

import type { IconType } from "react-icons";

import { H2 } from "@/components/ui/heading";
import { about } from "@/content/about";

const icons: Record<string, IconType> = {
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
  Figma: SiFigma,
  Linux: SiLinux,
};

export function AboutSkills() {
  return (
    <section className="space-y-12">
      <H2>Technologies I Enjoy Working With</H2>

      <div className="space-y-10">
        {about.skills.map((group) => (
          <div
            key={group.category}
            className="border-b border-neutral-200 pb-8 last:border-none dark:border-neutral-800"
          >
            <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-green-500">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => {
                const Icon = icons[item];

                return (
                  <div
                    key={item}
                    className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-500 hover:text-green-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-green-400 dark:hover:text-green-400"
                  >
                    {Icon && (
                      <Icon className="h-4 w-4 flex-shrink-0" />
                    )}

                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
