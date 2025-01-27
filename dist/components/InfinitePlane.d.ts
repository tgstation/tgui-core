import { Component, PropsWithChildren } from 'react';
import { BoxProps } from './Box';
export type InfinitePlaneProps = PropsWithChildren<{
    onZoomChange?: (newZoomValue: number) => void;
    onBackgroundMoved?: (newX: number, newY: number) => void;
    initialLeft?: number;
    initialTop?: number;
    backgroundImage?: string;
    imageWidth: number;
} & BoxProps>;
type InfinitePlaneState = {
    mouseDown: boolean;
    left: number;
    top: number;
    lastLeft: number;
    lastTop: number;
    zoom: number;
};
export type MouseEventExtension = {
    screenZoomX: number;
    screenZoomY: number;
};
export declare class InfinitePlane extends Component<InfinitePlaneProps, InfinitePlaneState> {
    constructor(props: InfinitePlaneProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    doOffsetMouse: (event: MouseEvent & MouseEventExtension) => void;
    handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    onMouseUp: () => void;
    handleZoomIncrease: (_event: any) => void;
    handleZoomDecrease: (_event: any) => void;
    handleMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
