export type ProjectStatus =
  | "research"
  | "building"
  | "production"
  | "archived";

export interface ProjectTechnology {
  name: string;
  purpose?: string;
}

export interface ProjectImage {
  src: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface ProjectArchitecture {
  description: readonly string[];
  diagram?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;

  category: string;
  started: number;
  status: ProjectStatus;
  featured: boolean;

  technologies: readonly ProjectTechnology[];

  gallery: readonly ProjectImage[];

  overview: readonly string[];

  problem: readonly string[];
  principles: readonly string[];
  capabilities: readonly string[];
  engineering: readonly string[];
  challenges: readonly string[];
  lessons: readonly string[];

  architecture: ProjectArchitecture;

  roadmap: readonly string[];

  links: readonly ProjectLink[];
}
