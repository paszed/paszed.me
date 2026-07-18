export interface ProjectTechnology {
  name: string;
  purpose?: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
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

  featured: boolean;

  status: ProjectStatus;

  started: number;

  overview: readonly string[];

  problem: readonly string[];

  goals: readonly string[];

  features: readonly string[];

  architecture: readonly string[];

  engineering: readonly string[];

  challenges: readonly string[];

  results: readonly string[];

  lessons: readonly string[];

  roadmap: readonly string[];

  technologies: readonly ProjectTechnology[];

  gallery: readonly ProjectGalleryItem[];

  links: readonly ProjectLink[];
}
