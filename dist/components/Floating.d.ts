import { Placement } from '@floating-ui/react';
import { CSSProperties, ReactNode } from 'react';
import { BooleanLike } from '../common/react';
type Props = {
    /** Interacting with this element will open the floating element. */
    children: ReactNode;
    /** The content to display like floating. */
    content: ReactNode;
} & Partial<{
    /**
     * Where the content will be displayed, relative to children.
     * - See [Placement](https://floating-ui.com/docs/useFloating#placement)
     * @default 'bottom'
     */
    placement: Placement;
    /** Classes with will be applied to the content. */
    contentClasses: string;
    /** Inline styles with will be applied to the content. */
    contentStyles: CSSProperties;
    /** Use calculated by Floating UI children width as content width. */
    contentAutoWidth: boolean;
    /**
     * Indentation of content element from children.
     * @default 6
     */
    contentOffset: number;
    /** Disables all interactions. */
    disabled: BooleanLike;
    /**
     * How long the animation takes in ms.
     * - If specified, default animation will be disabled.
     * - Fully disables animations if 0
     * @default 200
     */
    animationDuration: number;
    /** Content will open when you hover over children. */
    hoverOpen: boolean;
    /**
     * Delay in ms before opening and closing the content.
     * - Works only if used `hoverOpen` prop.
     * @default 200
     */
    hoverDelay: number;
    /**
     * Whitelisted classes.
     * Used to allow to add some secured classes,
     * click on which will not close the content.
     * - Classes must be sent like this: `".class1, .class2"`
     */
    allowedOutsideClasses: string;
    /** Stops event propagation on children. */
    stopChildPropagation: boolean;
    /** Close the content after interaction with it. */
    closeAfterInteract: boolean;
    /**
     * Called when the open state changes.
     * Returns the new open state.
     * Can be used this way:
     * ```tsx
     * onOpenChange={open ? makeThingsOnOpen : makeThingsOnClose}
     * ```
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Called when mounted
     */
    onMounted: () => void;
}>;
/**
 * ## Floating
 *  Floating lets you position elements so that they don't go out of the bounds of the window.
 * - [Documentation](https://floating-ui.com/docs/react) for more information.
 */
export declare function Floating(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
