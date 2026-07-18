import type { Project } from "@/types/project";

import { ProjectSection } from "./project-section";

interface ProjectTechProps {
  project: Project;
}

export function ProjectTech({
  project,
}: ProjectTechProps) {
  if (project.technologies.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Technologies">
      <div className="max-w-3xl overflow-hidden rounded-lg border border-border">
        <table className="w-full border-collapse text-left">
          <tbody>
            {project.technologies.map((technology) => (
              <tr
                key={technology.name}
                className="border-b border-border last:border-b-0"
              >
                <th className="w-40 px-4 py-3 align-top font-medium text-fg">
                  {technology.name}
                </th>

                <td className="px-4 py-3 text-fg-secondary">
                  {technology.purpose ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProjectSection>
  );
}
