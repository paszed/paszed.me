import type { StringRecord } from "./common";

/**
 * Standard metadata returned with paginated collections.
 */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/**
 * Successful API result.
 */
export interface ApiSuccess<T> {
  success: true;
  data: T;
}

/**
 * Structured API error.
 */
export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: StringRecord;
  };
}

/**
 * Result returned by an application API boundary.
 *
 * Consumers must discriminate on `success` before accessing
 * either `data` or `error`.
 */
export type ApiResult<T> = ApiSuccess<T> | ApiError;

/**
 * Successful paginated result.
 */
export interface PaginatedData<T> {
  items: T[];
  meta: PaginationMeta;
}

/**
 * API result containing a paginated collection.
 */
export type PaginatedResult<T> = ApiResult<PaginatedData<T>>;

/**
 * Common pagination parameters accepted by collection endpoints.
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/**
 * Common sorting direction.
 */
export type SortDirection = "asc" | "desc";

/**
 * Generic sorting parameters.
 */
export interface SortParams<TField extends string = string> {
  sortBy?: TField;
  sortDirection?: SortDirection;
}

/**
 * Generic request parameters for searchable collections.
 */
export interface SearchParams {
  query?: string;
}

/**
 * Generic collection request parameters.
 */
export type CollectionParams<TField extends string = string> =
  PaginationParams &
    SearchParams &
    SortParams<TField>;
