import {
  Card,
  Heading,
  Stack,
  Text,
} from "@/design-system";

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card
      variant="interactive"
      className="
        group
        h-full
        p-6
        transition-transform
        duration-200
        hover:-translate-y-1
      "
    >
      <Stack gap="md">
        <Heading
          as="h3"
          className="
            text-2xl
            transition-colors
            duration-200
            group-hover:text-accent
          "
        >
          {title}
        </Heading>

        <Text
          muted
          size="sm"
          className="leading-relaxed"
        >
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
