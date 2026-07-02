export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;

  technologies: readonly string[];

  github?: string;
  website?: string;

  featured: boolean;
}
