import { CSSProperties } from 'react';
import { BoxProps } from './Box';

export type FlexProps = Partial<{
    align: string | boolean;
    direction: string;
    inline: boolean;
    justify: string;
    scrollable: boolean;
    style: CSSProperties;
    wrap: string | boolean;
}> & BoxProps;
export declare function computeFlexClassName(props: FlexProps): string;
export declare function computeFlexProps(props: FlexProps): Record<string, any>;
export declare function Flex(props: any): import("react/jsx-runtime").JSX.Element;
export declare namespace Flex {
    var Item: typeof FlexItem;
}
export type FlexItemProps = BoxProps & Partial<{
    align: string | boolean;
    basis: string | number;
    grow: number | boolean;
    order: number;
    shrink: number | boolean;
    style: Partial<HTMLDivElement['style']>;
}>;
export declare function computeFlexItemProps(props: FlexItemProps): Record<string, any>;
declare function FlexItem(props: any): import("react/jsx-runtime").JSX.Element;
export {};
