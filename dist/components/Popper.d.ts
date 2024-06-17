import { Placement } from '@popperjs/core';
import { PropsWithChildren, ReactNode } from 'react';

type RequiredProps = {
    /** The content to display in the popper */
    content: ReactNode;
    /** Whether the popper is open */
    isOpen: boolean;
};
type OptionalProps = Partial<{
    /** Called when the user clicks outside the popper */
    onClickOutside: () => void;
    /** Where to place the popper relative to the reference element */
    placement: Placement;
    /** Base z-index of the popper div
     * @default 5
     */
    baseZIndex: number;
}>;
type Props = RequiredProps & OptionalProps;
/**
 * ## Popper
 *  Popper lets you position elements so that they don't go out of the bounds of the window.
 * @url https://popper.js.org/react-popper/ for more information.
 */
export declare function Popper(props: PropsWithChildren<Props>): import("react/jsx-runtime").JSX.Element;
export {};
