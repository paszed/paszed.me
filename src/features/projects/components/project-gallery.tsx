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
}

export function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Gallery">
      <Grid
        columns={1}
        gap="lg"
      >
        {project.gallery.map((image) => (
          <Figure
            key={image.src}
            caption={
              image.caption ? (
                <Text
                  size="sm"
                  muted
                >
                  {image.caption}
                </Text>
              ) : undefined
            }
          >
            <Surface className="overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </Surface>
          </Figure>
        ))}
      </Grid>
    </ProjectSection>
  );
}
