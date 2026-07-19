import { Heading } from "@/design-system";

interface NowSectionProps {
  title: string;
  items: readonly string[];
}

export function NowSection({
  title,
  items,
}: NowSectionProps) {
  return (
    <section className="space-y-6">
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
    </section>
  );
}
