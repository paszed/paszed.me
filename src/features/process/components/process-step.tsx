import { Stack, Text } from "@/design-system";

import type { ProcessStep as ProcessStepContent } from "@/types/process";

interface ProcessStepProps {
  step: ProcessStepContent;
}

export function ProcessStep({
  step,
}: ProcessStepProps) {
  return (
    <article className="border-t border-border py-8 first:border-t-0">
      <div className="grid gap-6 md:grid-cols-[5rem_1fr]">
        <Text
          size="sm"
          muted
          className="font-medium tracking-[0.2em]"
        >
          {step.number}
        </Text>

        <Stack gap="sm">
          <Text
            as="h3"
            size="lead"
            className="font-semibold tracking-tight"
          >
            {step.title}
          </Text>

          <Text
            muted
            className="max-w-2xl leading-relaxed"
          >
            {step.description}
          </Text>
        </Stack>
      </div>
    </article>
  );
}
