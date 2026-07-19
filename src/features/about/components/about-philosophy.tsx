import {
  Heading,
  Panel,
  Stack,
  Text,
} from "@/design-system";

import { about } from "@/content";

export function AboutPhilosophy() {
  return (
    <section>
      <Stack gap="lg">


        <Heading as="h2">
  How I Build Software
</Heading>

        <div className="grid gap-8 md:grid-cols-2">
          {about.philosophy.map((principle) => (
            <Panel
              key={principle.title}
              className="h-full p-6"
            >
              <Stack gap="sm">
                <h3 className="text-xl font-semibold tracking-tight text-fg">
                  {principle.title}
                </h3>

                <Text
                  muted
                  className="leading-relaxed"
                >
                  {principle.description}
                </Text>
              </Stack>
            </Panel>
          ))}
        </div>
      </Stack>
    </section>
  );
}
