import { SyntheticEvent } from 'react';
/**
 * ## Textarea
 *
 * An input for larger amounts of text. Use this when you want inputs larger
 * than one row.
 */
export declare const TextArea: import('react').ForwardRefExoticComponent<Partial<{
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
    /** Whether the textarea is scrollable when it has more content than height */
    scrollbar: boolean;
    /** Clears the textarea when the enter key is pressed */
    selfClear: boolean;
    /** Provides a Record with key: markupChar entries which can be used for ctrl + key combinations to surround a selected text with the markup character */
    userMarkup: Record<string, string>;
    /** The value of the textarea */
    value: string;
}> & Partial<{
    as: string;
    children: import('react').ReactNode;
    className: string | import('../common/react').BooleanLike;
    id: string;
    style: import('react').CSSProperties;
    tw: string;
} & import('../common/ui').BooleanStyleMap & import('../common/ui').StringStyleMap & {
    onClick: import('react').MouseEventHandler<HTMLDivElement>;
    onContextMenu: import('react').MouseEventHandler<HTMLDivElement>;
    onDoubleClick: import('react').MouseEventHandler<HTMLDivElement>;
    onKeyDown: import('react').KeyboardEventHandler<HTMLDivElement>;
    onKeyUp: import('react').KeyboardEventHandler<HTMLDivElement>;
    onMouseDown: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseLeave: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseMove: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseOver: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseUp: import('react').MouseEventHandler<HTMLDivElement>;
    onScroll: import('react').UIEventHandler<HTMLDivElement>;
}> & import('react').RefAttributes<HTMLTextAreaElement>>;
