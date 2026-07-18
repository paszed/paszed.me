import { H1 } from "@/components/ui/heading";

export function ProjectsHero() {
  return (
    <header className="space-y-6">
      <H1>Projects</H1>

      <p className="max-w-3xl text-lg leading-8 text-fg-secondary">
        {
          "A collection of software platforms exploring developer experience, AI systems, software architecture, and long-term maintainability. Each project documents the problem it solves, the architectural decisions behind it, and the lessons learned throughout its evolution."
        }
      </p>
    </header>
  );
}
