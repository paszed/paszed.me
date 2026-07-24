/**
 * Creates a temporary object URL for a file or blob.
 *
 * The URL must be revoked when it is no longer needed.
 */
export function createObjectUrl(
  value: Blob | MediaSource,
): string {
  return URL.createObjectURL(value);
}

/**
 * Revokes a previously created object URL.
 */
export function revokeObjectUrl(url: string): void {
  URL.revokeObjectURL(url);
}

/**
 * Revokes multiple object URLs.
 */
export function revokeObjectUrls(
  urls: Iterable<string>,
): void {
  for (const url of urls) {
    revokeObjectUrl(url);
  }
}

/**
 * Returns the extension of a filename without the leading dot.
 *
 * Returns an empty string when no extension is present.
 */
export function getFileExtension(
  filename: string,
): string {
  const basename = filename
    .split(/[\\/]/)
    .pop() ?? filename;

  const index = basename.lastIndexOf(".");

  if (
    index <= 0 ||
    index === basename.length - 1
  ) {
    return "";
  }

  return basename.slice(index + 1).toLowerCase();
}

/**
 * Formats a byte count into a human-readable file size.
 */
export function formatFileSize(
  bytes: number,
): string {
  if (!Number.isFinite(bytes) || bytes < 0) {
    throw new RangeError(
      "File size must be a non-negative finite number.",
    );
  }

  if (bytes === 0) {
    return "0 B";
  }

  const units = [
    "B",
    "KB",
    "MB",
    "GB",
    "TB",
  ] as const;

  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  const value = bytes / 1024 ** exponent;

  return `${Number(value.toFixed(1))} ${units[exponent]}`;
}
