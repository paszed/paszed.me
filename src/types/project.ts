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

  problem: readonly string[];

  goals: readonly string[];

  architecture: readonly string[];

  features: readonly string[];

  engineering: readonly string[];

  challenges: readonly string[];

  lessons: readonly string[];

  roadmap: readonly string[];

  gallery: readonly ProjectGalleryItem[];
}
