/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
/**
 * Helper for conditionally adding/removing classes in React
 */
export declare const classes: (classNames: (string | BooleanLike)[]) => string;
/**
 * Normalizes children prop, so that it is always an array of VDom
 * elements.
 */
export declare const normalizeChildren: <T>(children: T | T[]) => T[];
/**
 * Shallowly checks if two objects are different.
 * Credit: https://github.com/developit/preact-compat
 */
export declare const shallowDiffers: (a: object, b: object) => boolean;
/**
 * A common case in tgui, when you pass a value conditionally, these are
 * the types that can fall through the condition.
 */
export type BooleanLike = number | boolean | null | undefined;
/**
 * A helper to determine whether the object is renderable by React.
 */
export declare const canRender: (value: unknown) => boolean;
