import { SyntheticEvent } from 'react';
export declare const TextArea: import('react').ForwardRefExoticComponent<Partial<{
    autoFocus: boolean;
    autoSelect: boolean;
    displayedValue: string;
    dontUseTabForIndent: boolean;
    fluid: boolean;
    maxLength: number;
    noborder: boolean;
    /** Fires when user is 'done typing': Clicked out, blur, enter key (but not shift+enter) */
    onChange: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    /** Fires once the enter key is pressed */
    onEnter: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    /** Fires once the escape key is pressed */
    onEscape: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    /** Fires on each key press / value change. Used for searching */
    onInput: (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => void;
    placeholder: string;
    scrollbar: boolean;
    selfClear: boolean;
    /** Provides a Record with key: markupChar entries which can be used for ctrl + key combinations to surround a selected text with the markup character */
    userMarkup: Record<string, string>;
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
