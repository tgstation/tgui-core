import { Placement } from '@popperjs/core';
import { ReactNode } from 'react';
import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';
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
    /** Disables and greys out the button */
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
    /** Called when element is clicked */
    onClick: (e: any) => void;
    /** Activates the button (gives it a green color) */
    selected: BooleanLike;
    /** A fancy, boxy tooltip, which appears when hovering over the button */
    tooltip: ReactNode;
    /** Position of the tooltip. See [`Popper`](#Popper) for valid options. */
    tooltipPosition: Placement;
    /** Align content vertically using flex. Use lineHeight if the height is static. */
    verticalAlignContent: string;
}> & EllipsisUnion & BoxProps;
/**
 * ## Button
 * Buttons allow users to take actions, and make choices, with a single click.
 */
export declare function Button(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Button {
    var Checkbox: typeof ButtonCheckbox;
    var Confirm: typeof ButtonConfirm;
    var Input: typeof ButtonInput;
    var File: typeof ButtonFile;
}
type CheckProps = Partial<{
    checked: BooleanLike;
}> & Props;
/**
 * ## Button.Checkbox
 * A ghetto checkbox, made entirely using existing Button API.
 */
export declare function ButtonCheckbox(props: CheckProps): import("react/jsx-runtime").JSX.Element;
type ConfirmProps = Partial<{
    confirmColor: string;
    confirmContent: ReactNode;
    confirmIcon: string;
}> & Props;
/**
 * ## Button.Confirm
 * A button with an extra confirmation step, using native button component.
 */
declare function ButtonConfirm(props: ConfirmProps): import("react/jsx-runtime").JSX.Element;
type InputProps = Partial<{
    currentValue: string;
    defaultValue: string;
    fluid: boolean;
    maxLength: number;
    onCommit: (e: any, value: string) => void;
    placeholder: string;
}> & Props;
/**
 * ## Button.Input
 * A button that turns into an input box after the first click.
 *
 * Turns back into a button after the user hits enter, defocuses, or hits escape. Enter and defocus commit, while escape cancels.
 */
declare function ButtonInput(props: InputProps): import("react/jsx-runtime").JSX.Element;
type FileProps = {
    accept: string;
    multiple?: boolean;
    onSelectFiles: (files: string | string[]) => void;
} & Props;
/**
 * ## Button.File
 * Accepts file input, based on the native element.
 */
declare function ButtonFile(props: FileProps): import("react/jsx-runtime").JSX.Element;
export {};
