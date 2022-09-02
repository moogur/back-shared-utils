export function getISODate(timestamp: number) {
  return new Date(timestamp * 1000).toISOString();
}

export function getNullableISODate(timestamp: number | null) {
  if (timestamp === null) return timestamp;

  return getISODate(timestamp);
}

export function getTimestamp(date: string) {
  return Math.floor(new Date(date).getTime() / 1000);
}
