import { ReactNode } from 'react';
import { BoxProps } from './Box';

export type DropdownEntry = {
    displayText: ReactNode;
    value: string | number;
};
type DropdownOption = string | DropdownEntry;
type Props = {
    /** An array of strings which will be displayed in the
    dropdown when open. See Dropdown.tsx for more advanced usage with DropdownEntry */
    options: DropdownOption[];
    /** Called when a value is picked from the list, `value` is the value that was picked */
    onSelected: (value: any) => void;
    /** Currently selected entry to display. Can be left stateless to permanently display this value. */
    selected: DropdownOption | null | undefined;
} & Partial<{
    /** Whether to scroll automatically on open. Defaults to true */
    autoScroll: boolean;
    /** Whether to display previous / next buttons */
    buttons: boolean;
    /** Whether to clip the selected text */
    clipSelectedText: boolean;
    /** Color of dropdown button */
    color: string;
    /** Disables the dropdown */
    disabled: boolean;
    /** Overwrites selection text with this. Good for objects etc. */
    displayText: ReactNode;
    /** Icon to display in dropdown button */
    icon: string;
    /** Angle of the icon */
    iconRotation: number;
    /** Whether or not the icon should spin */
    iconSpin: boolean;
    /** Width of the dropdown menu. Default: 15rem */
    menuWidth: string;
    /** Whether or not the arrow on the right hand side of the dropdown button is visible */
    noChevron: boolean;
    /** Called when dropdown button is clicked */
    onClick: (event: any) => void;
    /** Dropdown renders over instead of below */
    over: boolean;
    /** Text to show when nothing has been selected. */
    placeholder: string;
}> & BoxProps;
export declare function Dropdown(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
