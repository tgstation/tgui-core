import { BoxProps } from './Box';
import { CSSProperties } from 'react';

export type FlexProps = Partial<{
    align: string | boolean;
    direction: string;
    inline: boolean;
    justify: string;
    scrollable: boolean;
    style: CSSProperties;
    wrap: string | boolean;
}> & BoxProps;
export declare const computeFlexClassName: (props: FlexProps) => string;
export declare const computeFlexProps: (props: FlexProps) => Record<string, any>;
export declare const Flex: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    Item: (props: any) => import("react/jsx-runtime").JSX.Element;
};
export type FlexItemProps = BoxProps & Partial<{
    grow: number | boolean;
    order: number;
    shrink: number | boolean;
    basis: string | number;
    align: string | boolean;
    style: Partial<HTMLDivElement['style']>;
}>;
export declare const computeFlexItemProps: (props: FlexItemProps) => Record<string, any>;
