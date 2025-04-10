import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
type Props = {
    /** The content to display in the tooltip */
    content: ReactNode;
} & Partial<{
    /** Hovering this element will show the tooltip */
    children: ReactNode;
    /** Where to place the tooltip relative to the reference element */
    position: Placement;
}>;
export declare function Tooltip(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
