type Zip<T extends unknown[][]> = {
  [I in keyof T]: T[I] extends (infer U)[] ? U : never;
}[];

/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export function zip<T extends unknown[][]>(...arrays: T): Zip<T> {
  if (arrays.length === 0) {
    return [];
  }
  const numArrays = arrays.length;
  const numValues = arrays[0].length;
  const result: Zip<T> = [];
  for (let valueIndex = 0; valueIndex < numValues; valueIndex++) {
    const entry: unknown[] = [];
    for (let arrayIndex = 0; arrayIndex < numArrays; arrayIndex++) {
      entry.push(arrays[arrayIndex][valueIndex]);
    }

    // I tried everything to remove this any, and have no idea how to do it.
    result.push(entry as any);
  }
  return result;
}
