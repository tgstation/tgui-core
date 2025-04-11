/**
 * ### Key codes.
 * event.keyCode is deprecated, use this reference instead.
 *
 * Handles modifier keys (Shift, Alt, Control) and arrow keys.
 *
 * For alphabetical keys, use the actual character (e.g. 'a') instead of the key code.
 * Don't access Esc or Escape directly, use isEscape() instead
 *
 * Something isn't here that you want? Just add it:
 * @url https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 * @usage
 * ```ts
 * import { KEY } from 'tgui/common/keys';
 *
 * if (event.key === KEY.Enter) {
 *   // do something
 * }
 * ```
 *
 *
 */
export declare enum KEY {
    A = "a",
    Alt = "Alt",
    Backspace = "Backspace",
    Control = "Control",
    D = "d",
    Delete = "Delete",
    Down = "ArrowDown",
    E = "e",
    End = "End",
    Enter = "Enter",
    Esc = "Esc",
    Escape = "Escape",
    Home = "Home",
    Insert = "Insert",
    Left = "ArrowLeft",
    Minus = "-",
    N = "n",
    PageDown = "PageDown",
    PageUp = "PageUp",
    Plus = "+",
    Right = "ArrowRight",
    S = "s",
    Shift = "Shift",
    Space = " ",
    Tab = "Tab",
    Up = "ArrowUp",
    W = "w",
    Z = "z"
}
/**
 * ### isEscape
 *
 * Checks if the user has hit the 'ESC' key on their keyboard.
 * There's a weirdness in BYOND where this could be either the string
 * 'Escape' or 'Esc' depending on the browser. This function handles
 * both cases.
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key is Escape or Esc, false otherwise
 */
export declare function isEscape(key: string): boolean;
/**
 * ### isAlphabetic
 *
 * Checks if the user has hit any alphabetic key (a - z)
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key is in the range of a-z
 */
export declare function isAlphabetic(key: string): boolean;
/**
 * ### isNumeric
 *
 * Checks if the user has hit any numeric key (0 - 9)
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key is in the range of 0 - 9
 */
export declare function isNumeric(key: string): boolean;
/**
 * ### isCardinal
 *
 * Checks if the user has hit any cardinal key (n s w e)
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key matches any cardinal n s w e
 */
export declare function isCardinal(key: string): boolean;
/**
 * ### isArrow
 *
 * Checks if the user has hit any arrow key
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key matches any arrow keys
 */
export declare function isArrow(key: string): boolean;
/**
 * ### isWasd
 *
 * Checks if the user has hit any w a s d key
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key matches any w a s d
 */
export declare function isWasd(key: string): boolean;
/**
 * ### isMovement
 *
 * Checks if the user has hit any movement key (w a s d and arrow keys)
 *
 * @param key - the key to check, typically from event.key
 * @returns true if key matches any movement key w a s d and arrow keys
 */
export declare function isMovement(key: string): boolean;
