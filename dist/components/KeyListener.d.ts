import type { KeyEvent } from '../common/events';
type Props = Partial<{
    onKey: (key: KeyEvent) => void;
    onKeyDown: (key: KeyEvent) => void;
    onKeyUp: (key: KeyEvent) => void;
}>;
/**
 * ## KeyListener
 * A component that listens for keyboard events and calls the provided
 * callbacks.
 */
export declare function KeyListener(props: Props): null;
export {};
