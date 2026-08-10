import {
  PageHeader,
  Text,
} from "@/design-system";

interface ProjectsHeroProps {
  title: string;
  description: string;
}

export function ProjectsHero({
  title,
  description,
}: ProjectsHeroProps) {
  return (
    <PageHeader title={title}>
      <Text
        size="lg"
        muted
        className="max-w-2xl leading-relaxed"
      >
        {description}
      </Text>
    </PageHeader>
  );
}
