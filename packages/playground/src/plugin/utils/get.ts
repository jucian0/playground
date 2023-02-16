export function get<T extends object, K extends keyof T>(
  object: T,
  path: K | string,
  defaultValue?: any
): T[K] | any {
  const pathKeys = Array.isArray(path) ? path : (path as string).split(".");
  let result: any = object;

  for (const key of pathKeys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}

export function flatten<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}
