import { KeyboardEvent } from 'react';
import { BoxProps } from './Box';
export type ModalProps = BoxProps & Partial<{
    /** Fires once the enter key is pressed */
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
    /** Fires once the escape key is pressed */
    onEscape: (e: KeyboardEvent<HTMLInputElement>) => void;
}>;
/**
 * ## Modal
 * A modal window. Uses a [Dimmer](https://github.com/tgstation/tgui-core/tree/main/lib/components/Dimmer.tsx)
 * under the hood, and dynamically adjusts its own size to fit the content you're trying to display.
 *
 * Must be a direct child of a layout component (e.g. `Window`).
 */
export declare function Modal(props: ModalProps): import("react/jsx-runtime").JSX.Element;
