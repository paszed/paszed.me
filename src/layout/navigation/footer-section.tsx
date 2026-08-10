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
  href?: string;
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
      <h2
        className="
          font-sans
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-fg-muted
        "
      >
        {title}
      </h2>

      <List>
        {items.map((item) => {
          if (!item.href) {
            return (
              <ListItem key={item.label}>
                <Text
                  as="span"
                  size="sm"
                  muted
                >
                  {item.label}
                </Text>
              </ListItem>
            );
          }

          const external =
            item.href.startsWith("http");

          return (
            <ListItem
              key={`${item.label}-${item.href}`}
            >
              <Link
                href={item.href}
                target={
                  external ? "_blank" : undefined
                }
                rel={
                  external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-fg-secondary
                  transition-colors
                  duration-200
                  hover:text-fg
                "
              >
                {showIcons && (
                  <SocialIcon
                    name={item.label}
                    className="size-3.5 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                  />
                )}

                <Text as="span" size="sm">
                  {item.label}
                </Text>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
