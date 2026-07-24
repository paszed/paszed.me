interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({
  children,
}: CalloutProps) {
  return (
    <aside className="my-8 rounded-2xl border border-border bg-card px-6 py-5">
      <p className="leading-8 text-fg-secondary">
        {children}
      </p>
    </aside>
  );
}
