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
        className="max-w-2xl leading-relaxed"
      >
        Software systems, developer tools, and infrastructure experiments
        built around one principle: create foundations that remain useful as
        complexity grows.
      </Text>
    </PageHeader>
  );
}
