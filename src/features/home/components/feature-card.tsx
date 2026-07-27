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
      className="h-full"
    >
      <Stack gap="sm">
        <Heading
          as="h3"
          className="text-lg"
        >
          {title}
        </Heading>

        <Text muted>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}
