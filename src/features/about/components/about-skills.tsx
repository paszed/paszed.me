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

import {
  Eyebrow,
  H2,
  Stack,
} from "@/components/ui";
import { about } from "@/content";

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
    <section>
      <Stack gap="2xl">
        <H2>Technologies I Enjoy Working With</H2>

        <Stack gap="xl">
          {about.skills.map((group) => (
            <div
              key={group.category}
              className="border-b border-border-muted pb-8 last:border-none"
            >
              <Eyebrow className="mb-5">
                {group.category}
              </Eyebrow>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const Icon = icons[item];

                  return (
                    <div
                      key={item}
                      className="group inline-flex items-center gap-2 rounded-full border border-border-muted bg-card px-4 py-2 text-sm font-medium text-fg-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-surface hover:text-accent"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 flex-shrink-0 transition-colors duration-200" />
                      )}

                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
