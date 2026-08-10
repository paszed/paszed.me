import Link from "next/link";

import { Stack, Text } from "@/design-system";
import type { ProcessContent } from "@/types/process";

interface ProcessPreviewProps {
  content: ProcessContent;
  eyebrow: string;
  href: string;
  actionLabel: string;
}

export function ProcessPreview({
  content,
  eyebrow,
  href,
  actionLabel,
}: ProcessPreviewProps) {
  return (
    <section>
      <Stack gap="xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Stack
            gap="sm"
            className="max-w-2xl"
          >
            <Text
              size="sm"
              muted
              className="font-medium uppercase tracking-[0.16em]"
            >
              {eyebrow}
            </Text>

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

          <Link
            href={href}
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-border
              px-4
              py-2
              text-sm
              font-medium
              transition-colors
              hover:border-fg
            "
          >
            {actionLabel}
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border bg-background/40 p-5"
            >
              <Stack gap="sm">
                <Text
                  size="sm"
                  muted
                  className="font-medium tracking-[0.2em]"
                >
                  {step.number}
                </Text>

                <Text
                  as="h3"
                  size="lg"
                  className="font-semibold"
                >
                  {step.title}
                </Text>
              </Stack>
            </div>
          ))}
        </div>
      </Stack>
    </section>
  );
}
