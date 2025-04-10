import { type ReactNode } from 'react';
import type { BoxProps } from './Box';
type DropdownEntry = {
    displayText: ReactNode;
    value: string | number;
};
type DropdownOption = string | DropdownEntry;
type Props = {
    /** Called when a value is picked from the list, `value` is the value that was picked */
    onSelected: (value: any) => void;
    /** An array of strings which will be displayed in the
    dropdown when open. See Dropdown.tsx for more advanced usage with DropdownEntry */
    options: DropdownOption[];
    /** Currently selected entry to display. Can be left stateless to permanently display this value. */
    selected: DropdownOption | null | undefined;
} & Partial<{
    /** Whether to scroll automatically on open. Defaults to true */
    autoScroll: boolean;
    /** Whether to display previous / next buttons */
    buttons: boolean;
    /** Color of dropdown button */
    color: string;
    /** Disables the dropdown */
    disabled: boolean;
    /** Overwrites selection text with this. Good for objects etc. */
    displayText: ReactNode;
    /** Icon to display in dropdown button */
    icon: string;
    /** Whether the icon should be displayed alone */
    iconOnly: boolean;
    /** Angle of the icon */
    iconRotation: number;
    /** Whether or not the icon should spin */
    iconSpin: boolean;
    /** Width of the dropdown menu in box units. Default: 15 */
    menuWidth: string | number;
    /** Whether or not the arrow on the right hand side of the dropdown button is visible */
    noChevron: boolean;
    /** Dropdown renders over instead of below */
    over: boolean;
    /** Text to show when nothing has been selected. */
    placeholder: string;
    /** @deprecated If you want to allow dropdown breaks layout, set width 100% */
    clipSelectedText: boolean;
    /** Called when dropdown button is clicked */
    onClick: (event: any) => void;
}> & BoxProps;
/**
 * ## Dropdown
 * A simple dropdown box component. Lets the user select from a list of options
 * and displays selected entry.
 */
export declare function Dropdown(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
