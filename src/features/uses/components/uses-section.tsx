import {
  Heading,
  Section,
  Stack,
} from "@/design-system";

interface UsesSectionProps {
  title: string;
  items: readonly string[];
}

export function UsesSection({
  title,
  items,
}: UsesSectionProps) {
  return (
    <Section>
      <Stack gap="md">
        <Heading as="h2">{title}</Heading>

        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="text-fg-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      </Stack>
    </Section>
  );
}
