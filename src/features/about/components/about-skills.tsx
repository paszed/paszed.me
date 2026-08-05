import {
  Badge,
  Cluster,
  Eyebrow,
  Grid,
  Heading,
  Card,
  Section,
  Stack,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutSkills() {
  return (
    <Section>
      <Stack gap="xl">
        <Stack gap="sm">
          <Heading as="h2">
            Engineering Toolkit
          </Heading>

          <Text
            muted
            className="max-w-3xl"
          >
            Technologies and tools I use to design, build, test, and maintain
            software systems.
          </Text>
        </Stack>

        <Grid
          columns={2}
          gap="lg"
        >
          {about.skills.map((group) => (
            <Card
              key={group.category}
              className="h-full p-6"
            >
              <Stack gap="md">
                <Eyebrow>
                  {group.category}
                </Eyebrow>

                <Cluster gap="sm">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      className="px-3 py-1.5"
                    >
                      {item}
                    </Badge>
                  ))}
                </Cluster>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
