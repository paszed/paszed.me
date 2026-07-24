import {
  Heading,
  PageHeader,
  Text,
} from "@/design-system";

export function ProjectsHero() {
  return (
    <PageHeader>
      <Heading as="h1">
        Projects
      </Heading>

      <Text
        size="lg"
        muted
        className="max-w-3xl leading-relaxed"
      >
        A collection of software platforms exploring developer experience, AI
        systems, software architecture, and long-term maintainability. Each
        project documents the problem it solves, the architectural decisions
        behind it, and the lessons learned throughout its evolution.
      </Text>
    </PageHeader>
  );
}
