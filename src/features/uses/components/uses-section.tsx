interface UsesSectionProps {
  title: string;
  items: readonly string[];
}

export function UsesSection({
  title,
  items,
}: UsesSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>

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
