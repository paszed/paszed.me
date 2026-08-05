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
      className="h-full p-6"
    >
      <Stack gap="md">
        <Heading
          as="h3"
          className="text-2xl"
        >
          {title}
        </Heading>

        <Text
          muted
          size="sm"
        >
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
