import type { ReactNode } from "react";

/**
 * A value that may be null.
 */
export type Nullable<T> = T | null;

/**
 * A value that may be undefined.
 */
export type Optional<T> = T | undefined;

/**
 * A value that may be null or undefined.
 */
export type Maybe<T> = T | null | undefined;

/**
 * Represents an asynchronous value.
 */
export type AsyncValue<T> = Promise<T>;

/**
 * Makes the specified properties optional.
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Makes the specified properties required.
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Makes every property recursively readonly.
 */
export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly (infer U)[]
    ? readonly DeepReadonly<U>[]
    : T extends object
      ? {
          readonly [K in keyof T]: DeepReadonly<T[K]>;
        }
      : T;

/**
 * Common identifier used by domain entities.
 */
export type EntityId = string;

/**
 * ISO-compatible date string.
 *
 * Kept as a string alias rather than a branded type so values from
 * content files, APIs, and serialized metadata remain ergonomic.
 */
export type ISODateString = string;

/**
 * Common metadata for entities that have creation/update timestamps.
 */
export interface Timestamped {
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

/**
 * Generic object with string keys.
 */
export type StringRecord<T = unknown> = Record<string, T>;

/**
 * Common option shape used by selects, filters, and similar controls.
 */
export interface Option<T extends string = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

/**
 * Generic link representation for content and navigation data.
 */
export interface Link {
  href: string;
  label: string;
  external?: boolean;
}

/**
 * Common props for components that accept children.
 */
export interface WithChildren {
  children: ReactNode;
}

/**
 * Common props for components that accept an optional class name.
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common props for components that accept both children and a class name.
 */
export interface ComponentProps
  extends WithChildren,
    WithClassName {}
