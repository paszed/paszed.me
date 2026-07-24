import {
  Heading,
  Measure,
  PageHeader,
  Text,
} from "@/design-system";

export function BlogHero() {
  return (
    <PageHeader>
      <Heading as="h1">
        Blog
      </Heading>

      <Measure size="3xl">
        <Text size="lg" muted>
          A collection of engineering notes, tutorials, project write-ups, and
          lessons learned while building software.
        </Text>
      </Measure>
    </PageHeader>
  );
}
