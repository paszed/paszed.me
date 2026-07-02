export interface Project {
  slug: string;

  title: string;
  summary: string;
  description: string;

  technologies: readonly string[];

  github?: string;
  website?: string;

  featured: boolean;

  status: "building" | "completed" | "archived";

  year: number;

  overview: string;

  architecture: readonly string[];

  challenges: readonly string[];

  lessons: readonly string[];
}
