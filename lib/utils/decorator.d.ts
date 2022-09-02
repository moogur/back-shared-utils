export declare function getEntity<T>(entity?: T | null, key?: keyof T): NonNullable<T> | NonNullable<T>[keyof T] | null;
