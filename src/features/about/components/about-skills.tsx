import {
  Badge,
  Cluster,
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
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            Tools & Technologies
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            Technologies and tools I use to design, build, test, and maintain
            modern software systems.
          </Text>
        </Stack>

        <Stack gap="xl">
          {about.skills.map((group) => (
            <Stack
              key={group.category}
              gap="md"
              className="
                border-b
                border-border-muted
                pb-8
                last:border-none
              "
            >
              <Text
                size="sm"
                className="
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-fg-muted
                "
              >
                {group.category}
              </Text>

              <Cluster gap="md">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    className="
                      gap-2
                      px-4
                      py-2
                      transition-colors
                      hover:border-border
                      hover:text-fg
                    "
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
