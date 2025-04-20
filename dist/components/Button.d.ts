import type { Placement } from '@floating-ui/react';
import { type ReactNode, type RefObject } from 'react';
import { type BooleanLike } from '../common/react';
import { type BoxProps } from './Box';
/**
 * Getting ellipses to work requires that you use:
 * 1. A string rather than a node
 * 2. A fixed width here or in a parent
 * 3. Children prop rather than content
 */
type EllipsisUnion = {
    children: string;
    /** @deprecated use children instead */
    content?: never;
    /** Cuts off text with an ellipsis */
    ellipsis: true;
} | Partial<{
    children: ReactNode;
    /** @deprecated use children instead */
    content: ReactNode;
    ellipsis: undefined;
}>;
type Props = Partial<{
    /** Captures keyboard events */
    captureKeys: boolean;
    /** Makes the button circular */
    circular: boolean;
    /** Reduces the padding of the button */
    compact: boolean;
    /** Disables button and makes it semi-transparent */
    disabled: BooleanLike;
    /** Fill all available horizontal space */
    fluid: boolean;
    /** Adds an icon to the button */
    icon: string | false;
    /** Icon color */
    iconColor: string;
    /** Icon position */
    iconPosition: string;
    /** Icon rotation */
    iconRotation: number;
    /** Icon size */
    iconSize: number;
    /** Makes the icon spin */
    iconSpin: BooleanLike;
    /** Called when the button is blurred */
    onBlur: (e: any) => void;
    /** Called when element is clicked */
    onClick: (e: any) => void;
    /** Activates the button (gives it a green color) */
    selected: BooleanLike;
    /** A fancy, boxy tooltip, which appears when hovering over the button */
    tooltip: ReactNode;
    /** Position of the tooltip. Does not guarantee the position is respected. */
    tooltipPosition: Placement;
    /** Align content vertically using flex. Use lineHeight if the height is static. */
    verticalAlignContent: string;
}> & EllipsisUnion & BoxProps;
export declare function Button(props: Props): import("react/jsx-runtime").JSX.Element;
type CheckProps = Partial<{
    checked: BooleanLike;
}> & Props;
declare function ButtonCheckbox(props: CheckProps): import("react/jsx-runtime").JSX.Element;
type ConfirmProps = Partial<{
    confirmColor: string;
    confirmContent: ReactNode;
    confirmIcon: string;
}> & Props;
declare function ButtonConfirm(props: ConfirmProps): import("react/jsx-runtime").JSX.Element;
type InputProps = Partial<{
    /** Text to display on the button exclusively. If left blank, displays the value */
    buttonText: string;
    /** Use the value prop. This is done to be uniform with other inputs. */
    children: never;
    /** Max length of the input */
    maxLength: number;
    /** Action on enter key press */
    onEnter: (value: string) => void;
    /** Reference to the inner input */
    ref: RefObject<HTMLInputElement | null>;
    /** The value of the input */
    value: string;
}> & Props;
declare function ButtonInput(props: InputProps): import("react/jsx-runtime").JSX.Element;
type FileProps = {
    accept: string;
    multiple?: boolean;
    onSelectFiles: (files: string | string[]) => void;
} & Props;
declare function ButtonFile(props: FileProps): import("react/jsx-runtime").JSX.Element;
/**
 * ## Button
 * Buttons allow users to take actions, and make choices, with a single click.
 */
export declare namespace Button {
    /**
     * ## Button.Checkbox
     * A ghetto checkbox, made entirely using existing Button API.
     */
    const Checkbox: typeof ButtonCheckbox;
    /**
     * ## Button.Confirm
     * A button with an extra confirmation step, using native button component.
     */
    const Confirm: typeof ButtonConfirm;
    /**
     * ## Button.Input
     * A button that turns into an input box after the first click.
     *
     * Turns back into a button after the user hits enter, defocuses, or hits escape. Enter and defocus commit, while escape cancels.
     */
    const Input: typeof ButtonInput;
    /**
     * ## Button.File
     * Accepts file input, based on the native element.
     */
    const File: typeof ButtonFile;
}
export {};
