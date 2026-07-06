interface SearchInputProps {
  value: string;
  onChange(value: string): void;
}

export function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      type="search"
      placeholder="Search articles, projects, and pages..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-fg-muted"
    />
  );
}
