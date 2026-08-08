import {
  Badge,
  Cluster,
  Heading,
  Section,
  Stack,
  TechnologyIcon,
  Text,
} from "@/design-system";
import type { AboutSkillsContent } from "@/features/about/types";

interface AboutSkillsProps {
  content: AboutSkillsContent;
}

export function AboutSkills({
  content,
}: AboutSkillsProps) {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            {content.title}
          </Heading>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <Stack gap="lg">
          {content.items.map((group) => (
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

              <Cluster gap="sm">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    className="
                      gap-2
                      px-3
                      py-1.5
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
