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
  | "research"
  | "building"
  | "production"
  | "archived";

export type ProjectCategory =
  | "engineering-environment"
  | "platform-infrastructure"
  | "reusable-capabilities"
  | "ai-orchestration"
  | "applications";

export interface Project {
  // Identity
  slug: string;
  title: string;
  tagline: string;
  summary: string;

  // Metadata
  featured: boolean;
  status: ProjectStatus;
  started: number;
  category: ProjectCategory;

  // Story
  overview: readonly string[];

  problem: readonly string[];

  principles: readonly string[];

  architecture: {
    description: readonly string[];
    diagram?: string;
  };

  capabilities: readonly string[];

  engineering: readonly string[];

  challenges: readonly string[];

  lessons: readonly string[];

  roadmap: readonly string[];

  // Technical
  technologies: readonly ProjectTechnology[];

  gallery: readonly ProjectGalleryItem[];

  links: readonly ProjectLink[];
}
