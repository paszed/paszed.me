export interface ProjectGalleryItem {
  src: string;
  alt: string;
}

export type ProjectStatus =
  | "building"
  | "completed"
  | "archived";

export interface Project {
  slug: string;

  title: string;

  summary: string;

  description: string;

  technologies: readonly string[];

  github?: string;

  website?: string;

  featured: boolean;

  status: ProjectStatus;

  year: number;

  overview: string;

  architecture: readonly string[];

  challenges: readonly string[];

  lessons: readonly string[];

  roadmap: readonly string[];

  gallery: readonly ProjectGalleryItem[];
}
