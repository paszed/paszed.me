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
} from "react-icons/tb";

import type { IconType } from "react-icons";

import {
  Cluster,
  Eyebrow,
  Heading,
  Section,
  Stack,
} from "@/design-system";

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
  Linux: SiLinux,
};

export function AboutSkills() {
  return (
    <Section>
      <Stack gap="2xl">
        <Heading as="h2">Tools & Technologies</Heading>

        <Stack gap="xl">
          {about.skills.map((group) => (
            <section
              key={group.category}
              className="border-b border-border-muted pb-8 last:border-none"
            >
              <Eyebrow className="mb-6">
                {group.category}
              </Eyebrow>

              <Cluster gap="md">
                {group.items.map((item) => {
                  const Icon = icons[item];

                  return (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-border-muted bg-card px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:border-border hover:text-fg"
                    >
                      {Icon && (
                        <Icon
                          aria-hidden
                          focusable="false"
                          className="size-4 shrink-0"
                        />
                      )}

                      <span>{item}</span>
                    </div>
                  );
                })}
              </Cluster>
            </section>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}
