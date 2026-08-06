import {
  Heading,
  List,
  ListItem,
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
      <Stack gap="xl">
        <Heading as="h2">
          {title}
        </Heading>

        <List>
          {items.map((item) => (
            <ListItem
              key={item}
              muted
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Section>
  );
}
