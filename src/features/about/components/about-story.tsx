import {
  H2,
  Stack,
  Text,
} from "@/components/ui";
import { about } from "@/content";

export function AboutStory() {
  return (
    <section>
      <Stack gap="md">
        <H2>My Story</H2>

        <Stack gap="sm">
          {about.story.map((paragraph) => (
            <Text
              key={paragraph}
              size="lg"
              muted
            >
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
