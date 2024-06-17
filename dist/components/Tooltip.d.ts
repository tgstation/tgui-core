import { createPopper, Placement, VirtualElement } from '@popperjs/core';
import { Component, ReactNode } from 'react';

type TooltipProps = {
    children?: ReactNode;
    content: ReactNode;
    position?: Placement;
};
type TooltipState = {
    hovered: boolean;
};
export declare class Tooltip extends Component<TooltipProps, TooltipState> {
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
