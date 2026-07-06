import type { KeyboardEventHandler } from "react";

interface SearchInputProps {
  value: string;
  onChange(value: string): void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export function SearchInput({
  value,
  onChange,
  onKeyDown,
}: SearchInputProps) {
  return (
    <input
      type="search"
      placeholder="Search articles, projects, and pages..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      onKeyDown={onKeyDown}
      autoFocus
      className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-fg-muted"
    />
  );
}
