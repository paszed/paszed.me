export function calculateReadingTime(text: string): string {
  const WORDS_PER_MINUTE = 200;

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(
    1,
    Math.ceil(words / WORDS_PER_MINUTE),
  );

  return `${minutes} min read`;
}
