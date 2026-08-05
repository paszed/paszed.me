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
      className="h-full p-7"
    >
      <Stack gap="md">
        <Heading
          as="h3"
          className="text-xl"
        >
          {title}
        </Heading>

        <Text
          muted
          size="sm"
          className="leading-7"
        >
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
