import {
  Measure,
  Surface,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/design-system";
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
    <ProjectSection title="Technology & Tools">
      <Measure size="3xl">
        <Surface className="overflow-hidden rounded-lg">
          <Table>
            <TableBody>
              {project.technologies.map((technology) => (
                <TableRow key={technology.name}>
                  <TableHead className="w-40">
                    {technology.name}
                  </TableHead>

                  <TableCell>
                    {technology.purpose ?? "Used as part of the system architecture."}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Surface>
      </Measure>
    </ProjectSection>
  );
}
