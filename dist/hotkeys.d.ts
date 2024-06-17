import { KeyEvent } from './events';

/**
 * Acquires a lock on the hotkey, which prevents it from being
 * passed through to BYOND.
 */
export declare const acquireHotKey: (keyCode: number) => void;
/**
 * Makes the hotkey available to BYOND again.
 */
export declare const releaseHotKey: (keyCode: number) => void;
export declare const releaseHeldKeys: () => void;
export declare const setupHotKeys: () => void;
/**
 * Registers for any key events, such as key down or key up.
 * This should be preferred over directly connecting to keydown/keyup
 * as it lets tgui prevent the key from reaching BYOND.
 *
 * If using in a component, prefer KeyListener, which automatically handles
 * stopping listening when unmounting.
 *
 * @param callback The function to call whenever a key event occurs
 * @returns A callback to stop listening
 */
export declare const listenForKeyEvents: (callback: (key: KeyEvent) => void) => () => void;
