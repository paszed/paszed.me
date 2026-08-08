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

  labels: {
    technology: string;
    purpose: string;
    technologyPurpose: string;
  };
}

export function ProjectTech({
  project,
  labels,
}: ProjectTechProps) {
  if (project.technologies.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={labels.technology}>
      <Measure size="3xl">
        <Surface>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  {labels.technology}
                </TableCell>

                <TableCell>
                  {labels.purpose}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {project.technologies.map(
                (technology) => (
                  <TableRow
                    key={technology.name}
                  >
                    <TableCell>
                      {technology.name}
                    </TableCell>

                    <TableCell>
                      {technology.purpose ??
                        labels.technologyPurpose}
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </Surface>
      </Measure>
    </ProjectSection>
  );
}
