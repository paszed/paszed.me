import Link from "next/link";

import {
  List,
  ListItem,
  SocialIcon,
  Stack,
  Text,
} from "@/design-system";

interface FooterItem {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  items: readonly FooterItem[];
  showIcons?: boolean;
}

export function FooterSection({
  title,
  items,
  showIcons = false,
}: FooterSectionProps) {
  return (
    <Stack gap="sm">
      <Text
        as="h2"
        size="xs"
        className="font-semibold uppercase tracking-[0.2em] text-fg-muted"
      >
        {title}
      </Text>

      <List>
        {items.map((item) => (
          <ListItem key={item.label}>
            <Link
              href={item.href}
              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group inline-flex items-center gap-2 text-xs text-fg-secondary transition-colors hover:text-fg"
            >
              {showIcons && (
                <SocialIcon
                  name={item.label}
                  className="size-3 opacity-70 transition-opacity group-hover:opacity-100"
                />
              )}

              <Text
                as="span"
                size="xs"
              >
                {item.label}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
