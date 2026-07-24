import {
  Badge,
  Cluster,
  Eyebrow,
  Heading,
  Section,
  Stack,
  TechnologyIcon,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutSkills() {
  return (
    <Section>
      <Stack gap="2xl">
        <Heading as="h2">
          Tools & Technologies
        </Heading>

        <Stack gap="xl">
          {about.skills.map((group) => (
            <Stack
              key={group.category}
              gap="md"
              className="border-b border-border-muted pb-8 last:border-none"
            >
              <Eyebrow>
                {group.category}
              </Eyebrow>

              <Cluster gap="md">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    className="gap-2 px-4 py-2 hover:border-border hover:text-fg"
                  >
                    <TechnologyIcon name={item} />

                    <Text
                      as="span"
                      size="sm"
                    >
                      {item}
                    </Text>
                  </Badge>
                ))}
              </Cluster>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}
