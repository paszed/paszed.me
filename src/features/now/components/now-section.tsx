import {
  Heading,
  List,
  ListItem,
  Section,
  Stack,
} from "@/design-system";

interface NowSectionProps {
  title: string;
  items: readonly string[];
}

export function NowSection({
  title,
  items,
}: NowSectionProps) {
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
