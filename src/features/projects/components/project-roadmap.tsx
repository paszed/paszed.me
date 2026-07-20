import {
  Text,
} from "@/design-system";

import type { Project } from "@/types/project";

import { ProjectSection } from "./project-section";

interface ProjectRoadmapProps {
  project: Project;
}

export function ProjectRoadmap({
  project,
}: ProjectRoadmapProps) {
  if (project.roadmap.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Roadmap">
      <div className="max-w-3xl">
        <ul className="space-y-4">
          {project.roadmap.map((item) => (
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
