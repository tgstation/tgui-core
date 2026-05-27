let cssVariableValueCache: { [key: string]: string } = {};

/**
 * Extracts the value of a CSS variable from the document's root element and caches it.
 * Returns empty string if the variable is not defined or has an empty value.
 */
export function getCssVariableValue(variableName: string): string {
  if (variableName in cssVariableValueCache) {
    return cssVariableValueCache[variableName];
  }

  const styles = getComputedStyle(document.documentElement);
  const value = styles.getPropertyValue(`--${variableName}`).trim();
  cssVariableValueCache[variableName] = value;
  return value || '';
}

/**
 * Cleans up calculated with `getCssVariableValue` cache
 * Use it only if there is too many variables changed
 * For example, on theme changing
 */
export function clearCssVariableValueCache() {
  cssVariableValueCache = {};
}
