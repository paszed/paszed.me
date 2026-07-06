export function formatDate(
  date: Date | null,
): string {
  if (!date) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
