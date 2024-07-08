import { createPopper, Placement, VirtualElement } from '@popperjs/core';
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
