import { H2 } from "@/components/ui/heading";

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
      <H2>{title}</H2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-neutral-600 dark:text-neutral-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
