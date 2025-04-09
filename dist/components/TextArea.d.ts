import { RefObject, SyntheticEvent } from 'react';
import { BoxProps } from './Box';
type Props = Partial<{
    /** Automatically focus the textarea on mount */
    autoFocus: boolean;
    /** Selects all text on mount */
    autoSelect: boolean;
    /** The value to display in the textarea */
    displayedValue: string;
    /** Don't use tab for indent */
    dontUseTabForIndent: boolean;
    /** Sets width to 100% */
    fluid: boolean;
    /** Maximum length of the textarea */
    maxLength: number;
    /** Removes the border. */
    noborder: boolean;
    /** Fires when user is 'done typing': Clicked out, blur, enter key (but not shift+enter) */
    onChange: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    /** Fires once the enter key is pressed */
    onEnter: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    /** Fires once the escape key is pressed */
    onEscape: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    /** Fires on each key press / value change. Used for searching */
    onInput: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    /** Dummy text inside the textarea when it's empty */
    placeholder: string;
    /** Ref to the textarea element. */
    ref: RefObject<HTMLTextAreaElement | null>;
    /** Whether the textarea is scrollable when it has more content than height */
    scrollbar: boolean;
    /** Clears the textarea when the enter key is pressed */
    selfClear: boolean;
    /** Provides a Record with key: markupChar entries which can be used for ctrl + key combinations to surround a selected text with the markup character */
    userMarkup: Record<string, string>;
    /** The value of the textarea */
    value: string;
}> & BoxProps;
/**
 * ## Textarea
 *
 * An input for larger amounts of text. Use this when you want inputs larger
 * than one row.
 */
export declare function TextArea(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
