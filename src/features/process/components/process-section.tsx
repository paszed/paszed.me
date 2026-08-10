import { Stack, Text } from "@/design-system";

import type { ProcessContent } from "@/types/process";

import { ProcessStep } from "./process-step";

interface ProcessSectionProps {
  content: ProcessContent;
}

export function ProcessSection({
  content,
}: ProcessSectionProps) {
  return (
    <section>
      <Stack gap="xl">
        <Stack gap="sm" className="max-w-2xl">
          <Text
            as="h2"
            size="lead"
            className="font-semibold tracking-tight"
          >
            {content.title}
          </Text>

          <Text
            muted
            className="leading-relaxed"
          >
            {content.description}
          </Text>
        </Stack>

        <div className="border-b border-border">
          {content.steps.map((step) => (
            <ProcessStep
              key={step.number}
              step={step}
            />
          ))}
        </div>
      </Stack>
    </section>
  );
}
