import { Placement, VirtualElement, createPopper } from '@popperjs/core';
import { Component, ReactNode } from 'react';
type Props = {
    /** The content to display in the tooltip */
    content: ReactNode;
} & Partial<{
    /** Hovering this element will show the tooltip */
    children: ReactNode;
    /** Where to place the tooltip relative to the reference element */
    position: Placement;
}>;
type State = {
    hovered: boolean;
};
/**
 * ## Tooltip
 * A boxy tooltip from tgui 1. It is very hacky in its current state, and
 * requires setting `position: relative` on the container.
 *
 * Please note that
 * [Button](https://github.com/tgstation/tgui-core/tree/main/lib/components/Button.tsx)
 * component has a `tooltip` prop and it is recommended to use that prop instead.
 *
 * Usage:
 * ```tsx
 * <Tooltip position="bottom" content="Box tooltip">
 *   <Box position="relative">Sample text.</Box>
 * </Tooltip>
 * ```
 */
export declare class Tooltip extends Component<Props, State> {
    static renderedTooltip: HTMLDivElement | undefined;
    static singletonPopper: ReturnType<typeof createPopper> | undefined;
    static currentHoveredElement: Element | undefined;
    static virtualElement: VirtualElement;
    getDOMNode(): Element;
    componentDidMount(): void;
    fadeOut(): void;
    renderPopperContent(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
export {};
