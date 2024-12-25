import { ReactNode } from 'react';
import { BoxProps } from './Box';
type Props = Partial<{
    /** Buttons or other content to render inline with the button */
    buttons: ReactNode;
    /** Top margin of the child nodes, defaulted to 1 */
    child_mt: number;
    /** Icon to display with the collapsible */
    icon: string;
    /** Whether the collapsible is open */
    open: boolean;
    /** Text to display on the button for collapsing */
    title: ReactNode;
}> & BoxProps;
/**
 * ## Collapsible
 * Displays contents when open, acts as a fluid button when closed.
 *
 * Click to toggle, closed by default.
 */
export declare function Collapsible(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
