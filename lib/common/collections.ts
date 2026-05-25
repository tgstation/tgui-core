type Zip<T extends unknown[][]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : never;
}[];

/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export function zip<T extends unknown[][]>(...arr: T): Zip<T> {
  return Array(Math.max(...arr.map((a) => a.length)))
    .fill(undefined)
    .map((_, i) => arr.map((a) => a[i])) as Zip<T>;
}

/**
 * Extracts the value of a CSS variable from the document's root element.
 * Returns null if the variable is not defined or has an empty value.
 */
export function getVariableValue(variableName: string): string {
  const styles = getComputedStyle(document.documentElement);
  return styles.getPropertyValue(`--${variableName}`).trim();
}
