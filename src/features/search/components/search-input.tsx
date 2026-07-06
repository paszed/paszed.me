"use client";

import {
  forwardRef,
  type KeyboardEventHandler,
} from "react";

interface SearchInputProps {
  value: string;
  onChange(value: string): void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const SearchInput = forwardRef<
  HTMLInputElement,
  SearchInputProps
>(function SearchInput(
  {
    value,
    onChange,
    onKeyDown,
  },
  ref,
) {
  return (
    <input
      ref={ref}
      type="search"
      placeholder="Search articles, projects, and pages..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      onKeyDown={onKeyDown}
      className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-fg-muted"
    />
  );
});
