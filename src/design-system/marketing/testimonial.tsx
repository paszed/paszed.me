import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Card } from "../primitives";
import { Stack } from "../layout";
import { Heading, Text } from "../typography";

export interface TestimonialProps
  extends HTMLAttributes<HTMLDivElement> {
  quote: ReactNode;
  author: string;
  role?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  ...props
}: TestimonialProps) {
  return (
    <Card {...props}>
      <Stack gap="lg">
        <Text>
          &ldquo;{quote}&rdquo;
        </Text>

        <div>
          <Heading as="h3">
            {author}
          </Heading>

          {role && (
            <Text
              size="sm"
              muted
            >
              {role}
            </Text>
          )}
        </div>
      </Stack>
    </Card>
  );
}
