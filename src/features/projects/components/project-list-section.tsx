import type { ReactNode } from "react";

import { Text } from "@/design-system";

import { ProjectSection } from "./project-section";

interface ProjectListSectionProps {
  title: ReactNode;
  items: readonly string[];
}

export function ProjectListSection({
  title,
  items,
}: ProjectListSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={title}>
      <div className="max-w-3xl">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4"
            >
              <span
                aria-hidden
                className="mt-2 size-2 shrink-0 rounded-full bg-success"
              />

              <Text
                muted
                className="leading-relaxed"
              >
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </ProjectSection>
  );
}
