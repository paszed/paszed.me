"use client";

import {
  forwardRef,
  type KeyboardEventHandler,
} from "react";

import { Input } from "@/design-system";

interface SearchInputProps {
  value: string;
  onChange(value: string): void;
  onKeyDown?: KeyboardEventHandler;
  ariaLabel: string;
  placeholder: string;
}

export const SearchInput = forwardRef<
  HTMLInputElement,
  SearchInputProps
>(function SearchInput(
  {
    value,
    onChange,
    onKeyDown,
    ariaLabel,
    placeholder,
  },
  ref,
) {
  return (
    <Input
      ref={ref}
      aria-label={ariaLabel}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      onKeyDown={onKeyDown}
      autoComplete="off"
      spellCheck={false}
      className="h-auto border-0 bg-transparent px-0 py-0 text-lg shadow-none"
    />
  );
});
