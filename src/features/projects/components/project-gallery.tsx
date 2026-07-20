import Image from "next/image";

import { Grid, Surface, Text } from "@/design-system";

import { ProjectSection } from "./project-section";

import type { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (project.gallery.length === 0) {
    return null;
  }

  return (
    <ProjectSection title="Gallery">
      <Grid gap="lg">
        {project.gallery.map((image) => (
          <figure key={image.src}>
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

            {image.caption && (
              <figcaption className="border-t border-border px-5 py-4">
                <Text size="sm" muted>
                  {image.caption}
                </Text>
              </figcaption>
            )}
          </figure>
        ))}
      </Grid>
    </ProjectSection>
  );
}
