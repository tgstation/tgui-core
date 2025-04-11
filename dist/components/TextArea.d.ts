import type { RefObject } from 'react';
import type { TextInputProps } from './Input';
type Props = Partial<{
    /** Don't use tab for indent */
    dontUseTabForIndent: boolean;
    /** Ref to the textarea element. */
    ref: RefObject<HTMLTextAreaElement | null>;
    /**
     * Provides a Record with key: markupChar entries which can be used for
     * ctrl + key combinations to surround a selected text with the markup
     * character
     */
    userMarkup: Record<string, string>;
}> & TextInputProps;
/**
 * ## Textarea
 *
 * An input for larger amounts of text. Use this when you want inputs larger
 * than one row.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/TextArea.tsx
 */
export declare function TextArea(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
