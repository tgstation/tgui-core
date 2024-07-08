import { Component, RefObject } from 'react';
import { BoxProps } from './Box';

type Props = {
    data: number[][];
} & Partial<{
    fillColor: string;
    rangeX: [number, number];
    rangeY: [number, number];
    strokeColor: string;
    strokeWidth: number;
}> & BoxProps;
type State = {
    viewBox: [number, number];
};
declare class LineChart extends Component<Props> {
    ref: RefObject<HTMLDivElement>;
    state: State;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare const Chart: {
    Line: typeof LineChart;
};
export {};
