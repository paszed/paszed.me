import Image from "next/image";

import { ProjectSection } from "./project-section";

import type { Project } from "@/types/project";

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
      <div className="grid gap-6">
        {project.gallery.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </ProjectSection>
  );
}
