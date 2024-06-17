import { Placement } from '@popperjs/core';
import { BooleanLike } from '../common/react';
import { ReactNode } from 'react';
import { BoxProps } from './Box';

/**
 * Getting ellipses to work requires that you use:
 * 1. A string rather than a node
 * 2. A fixed width here or in a parent
 * 3. Children prop rather than content
 */
type EllipsisUnion = {
    ellipsis: true;
    children: string;
    /** @deprecated use children instead */
    content?: never;
} | Partial<{
    ellipsis: undefined;
    children: ReactNode;
    /** @deprecated use children instead */
    content: ReactNode;
}>;
type Props = Partial<{
    captureKeys: boolean;
    circular: boolean;
    compact: boolean;
    disabled: BooleanLike;
    fluid: boolean;
    icon: string | false;
    iconColor: string;
    iconPosition: string;
    iconRotation: number;
    iconSpin: BooleanLike;
    onClick: (e: any) => void;
    selected: BooleanLike;
    tooltip: ReactNode;
    tooltipPosition: Placement;
    verticalAlignContent: string;
}> & EllipsisUnion & BoxProps;
/** Clickable button. Comes with variants. Read more in the documentation. */
export declare const Button: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    Checkbox: (props: CheckProps) => import("react/jsx-runtime").JSX.Element;
    Confirm: (props: ConfirmProps) => import("react/jsx-runtime").JSX.Element;
    Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
    File: typeof ButtonFile;
};
type CheckProps = Partial<{
    checked: BooleanLike;
}> & Props;
/** Visually toggles between checked and unchecked states. */
export declare const ButtonCheckbox: (props: CheckProps) => import("react/jsx-runtime").JSX.Element;
type ConfirmProps = Partial<{
    confirmColor: string;
    confirmContent: ReactNode;
    confirmIcon: string;
}> & Props;
type InputProps = Partial<{
    currentValue: string;
    defaultValue: string;
    fluid: boolean;
    maxLength: number;
    onCommit: (e: any, value: string) => void;
    placeholder: string;
}> & Props;
type FileProps = {
    accept: string;
    multiple?: boolean;
    onSelectFiles: (files: string | string[]) => void;
} & Props;
/**  Accepts file input */
declare function ButtonFile(props: FileProps): import("react/jsx-runtime").JSX.Element;
export {};
