import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Stack } from "../layout";
import { Heading, Text } from "../typography";

export interface FAQProps
  extends HTMLAttributes<HTMLDivElement> {
  question: string;
  answer: ReactNode;
}

export function FAQ({
  question,
  answer,
  ...props
}: FAQProps) {
  return (
    <Stack
      gap="sm"
      {...props}
    >
      <Heading as="h3">
        {question}
      </Heading>

      <Text muted>
        {answer}
      </Text>
    </Stack>
  );
}
