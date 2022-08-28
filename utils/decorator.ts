export function getEntity<T>(entity?: T | null, key?: keyof T) {
  return !entity ? null : key ? entity[key] : entity;
}
