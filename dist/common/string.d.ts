/**
 * Creates a search terms matcher. Returns true if given string matches the search text.
 *
 * @example
 * ```tsx
 * type Thing = { id: string; name: string };
 *
 * const objects = [
 *   { id: '123', name: 'Test' },
 *   { id: '456', name: 'Test' },
 * ];
 *
 * const search = createSearch('123', (obj: Thing) => obj.id);
 *
 * objects.filter(search); // returns [{ id: '123', name: 'Test' }]
 * ```
 */
export declare function createSearch<TObj>(searchText: string, stringifier?: (obj: TObj) => string): (obj: TObj) => boolean;
export declare const VOWELS: string[];
/**
 * Pluralizes a word based on the number given.
 * Handles -es and -ies.
 *
 * @param override - A custom string to be appended instead for plurals. Useful for words that don't follow the standard rules.
 *
 * @example
 * ```tsx
 * pluralize('Dog', 1) // Dog
 * pluralize('Dog', 2) // Dogs
 * pluralize('Monarch', 2, "s") // Monarchs
 * ```
 */
export declare function pluralize(str: string, n: number, override?: string): string;
/**
 * Capitalizes a word and lowercases the rest.
 *
 * @example
 * ```tsx
 * capitalize('heLLo') // Hello
 * ```
 */
export declare function capitalize(str: string): string;
/**
 * Similar to capitalize, this takes a string and replaces all first letters
 * of any words.
 *
 * @example
 * ```tsx
 * capitalizeAll('heLLo woRLd') // 'HeLLo WoRLd'
 * ```
 */
export declare function capitalizeAll(str: string): string;
/**
 * Capitalizes only the first letter of the str, leaving others untouched.
 *
 * @example
 * ```tsx
 * capitalizeFirst('heLLo woRLd') // 'HeLLo woRLd'
 * ```
 */
export declare function capitalizeFirst(str: string): string;
/**
 * Converts a string to title case.
 *
 * @example
 * ```tsx
 * toTitleCase('a tale of two cities') // 'A Tale of Two Cities'
 * ```
 */
export declare function toTitleCase(str: string): string;
/**
 * Decodes HTML entities and removes unnecessary HTML tags.
 *
 * @example
 * ```tsx
 * decodeHtmlEntities('&amp;') // returns '&'
 * decodeHtmlEntities('&lt;') // returns '<'
 * ```
 */
export declare function decodeHtmlEntities(str: string): string;
