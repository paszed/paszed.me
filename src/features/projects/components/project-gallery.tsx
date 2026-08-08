import Image from "next/image";

import {
  Figure,
  Grid,
  Surface,
  Text,
} from "@/design-system";
import type { Project } from "@/types/project";

import { ProjectSection } from "./project-section";

interface ProjectGalleryProps {
  project: Project;

  title: string;

  imageAlt: string;
}

export function ProjectGallery({
  project,
  title,
  imageAlt,
}: ProjectGalleryProps) {
  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <ProjectSection title={title}>
      <Grid
        columns={
          project.gallery.length > 1
            ? 2
            : 1
        }
        gap="lg"
      >
        {project.gallery.map((image) => (
          <Figure
            key={image.src}
            caption={
              image.caption ? (
                <Text>
                  {image.caption}
                </Text>
              ) : undefined
            }
          >
            <Surface>
              <Image
                src={image.src}
                alt={
                  image.caption ?? imageAlt
                }
                width={1200}
                height={800}
              />
            </Surface>
          </Figure>
        ))}
      </Grid>
    </ProjectSection>
  );
}
