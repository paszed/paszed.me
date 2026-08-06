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
        A collection of software products, developer tools, and technical
        systems built to solve real problems through thoughtful architecture
        and reliable engineering.
      </Text>
    </PageHeader>
  );
}
