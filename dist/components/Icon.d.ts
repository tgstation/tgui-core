import { CSSProperties, ReactNode } from 'react';
import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';

type IconPropsUnique = {
    name: string;
} & Partial<{
    className: string;
    rotation: number;
    size: number;
    spin: BooleanLike;
    style: CSSProperties;
}>;
export type IconProps = IconPropsUnique & BoxProps;
export declare function Icon(props: IconProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Icon {
    var Stack: typeof IconStack;
}
type IconStackUnique = {
    children: ReactNode;
    className?: string;
};
export type IconStackProps = IconStackUnique & BoxProps;
export declare function IconStack(props: IconStackProps): import("react/jsx-runtime").JSX.Element;
export {};
