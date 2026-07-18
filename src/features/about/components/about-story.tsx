import {
  H2,
  Stack,
  Text,
} from "@/components/ui";
import { about } from "@/content";

export function AboutStory() {
  return (
    <section>
      <Stack gap="lg">
        <H2>My Story</H2>

        <Stack
          gap="lg"
          className="max-w-3xl"
        >
          {about.story.map((paragraph) => (
            <Text
              key={paragraph}
              size="lg"
              muted
              className="leading-relaxed"
            >
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}
