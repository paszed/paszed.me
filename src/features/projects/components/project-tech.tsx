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
    <ProjectSection title="Technologies">
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
                    {technology.purpose ?? "—"}
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
