import { SyntheticEvent } from 'react';
import { BoxProps } from './Box';

type ConditionalProps = {
    /**
     * Mark this if you want to debounce onInput.
     *
     * This is useful for expensive filters, large lists etc.
     *
     * Requires `onInput` to be set.
     */
    expensive?: boolean;
    /**
     * Fires on each key press / value change. Used for searching.
     *
     * If it's a large list, consider using `expensive` prop.
     */
    onInput: (event: SyntheticEvent<HTMLInputElement>, value: string) => void;
} | {
    /** This prop requires onInput to be set */
    expensive?: never;
    onInput?: never;
};
type OptionalProps = Partial<{
    /** Automatically focuses the input on mount */
    autoFocus: boolean;
    /** Automatically selects the input value on focus */
    autoSelect: boolean;
    /** The class name of the input */
    className: string;
    /** Disables the input */
    disabled: boolean;
    /** Mark this if you want the input to be as wide as possible */
    fluid: boolean;
    /** The maximum length of the input value */
    maxLength: number;
    /** Mark this if you want to use a monospace font */
    monospace: boolean;
    /** Fires when user is 'done typing': Clicked out, blur, enter key */
    onChange: (event: SyntheticEvent<HTMLInputElement>, value: string) => void;
    /** Fires once the enter key is pressed */
    onEnter?: (event: SyntheticEvent<HTMLInputElement>, value: string) => void;
    /** Fires once the escape key is pressed */
    onEscape: (event: SyntheticEvent<HTMLInputElement>) => void;
    /** The placeholder text when everything is cleared */
    placeholder: string;
    /** Clears the input value on enter */
    selfClear: boolean;
    /** The state variable of the input. */
    value: string | number;
}>;
type Props = OptionalProps & ConditionalProps & BoxProps;
export declare function toInputValue(value: string | number | undefined): string;
/**
 * ### Input
 * A basic text input which allow users to enter text into a UI.
 * > Input does not support custom font size and height due to the way
 * > it's implemented in CSS. Eventually, this needs to be fixed.
 */
export declare function Input(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
