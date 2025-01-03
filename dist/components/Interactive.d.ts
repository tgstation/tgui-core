import { default as React, Component, KeyboardEvent, MouseEvent, RefObject } from 'react';
export interface Interaction {
    left: number;
    top: number;
}
export interface InteractiveProps {
    onMove: (interaction: Interaction) => void;
    onKey: (offset: Interaction) => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export declare class Interactive extends Component<InteractiveProps> {
    containerRef: RefObject<HTMLDivElement>;
    constructor(props: InteractiveProps);
    handleMoveStart: (event: MouseEvent) => void;
    handleMove: (event: MouseEvent) => void;
    handleMoveEnd: () => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    toggleDocumentEvents: (state: boolean) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
