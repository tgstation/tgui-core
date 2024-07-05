import { ReactNode } from 'react';
import { BoxProps } from './Box';

type Props = Partial<{
    /** Buttons or other content to render inline with the button */
    buttons: ReactNode;
    /** Icon to display with the collapsible */
    icon: string;
    /** Whether the collapsible is open */
    open: boolean;
    /** Text to display on the button for collapsing */
    title: ReactNode;
}> & BoxProps;
export declare function Collapsible(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
