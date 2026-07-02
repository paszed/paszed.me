import { H1 } from "@/components/ui/heading";

export function ProjectsHero() {
  return (
    <header className="space-y-6">
      <H1>Projects</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {
          "A collection of software, experiments, and products I've built. Every project documents the architecture, technical decisions, and lessons learned throughout the development process."
        }
      </p>
    </header>
  );
}
