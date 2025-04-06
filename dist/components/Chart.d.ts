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
export declare function Chart(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Chart {
    var Line: typeof Chart;
}
export {};
