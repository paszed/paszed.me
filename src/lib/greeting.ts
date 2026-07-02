export function getGreeting(date = new Date()) {
  const hour = date.getHours();

  if (hour < 5) {
    return "BURNING THE MIDNIGHT OIL";
  }

  if (hour < 12) {
    return "GOOD MORNING";
  }

  if (hour < 18) {
    return "GOOD AFTERNOON";
  }

  return "GOOD EVENING";
}
