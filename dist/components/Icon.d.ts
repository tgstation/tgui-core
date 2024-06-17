import { BooleanLike } from '../common/react';
import { CSSProperties, ReactNode } from 'react';
import { BoxProps } from './Box';

type IconPropsUnique = {
    name: string;
} & Partial<{
    size: number;
    spin: BooleanLike;
    className: string;
    rotation: number;
    style: CSSProperties;
}>;
export type IconProps = IconPropsUnique & BoxProps;
export declare const Icon: {
    (props: IconProps): import("react/jsx-runtime").JSX.Element;
    Stack: (props: IconStackProps) => import("react/jsx-runtime").JSX.Element;
};
type IconStackUnique = {
    children: ReactNode;
    className?: string;
};
export type IconStackProps = IconStackUnique & BoxProps;
export declare const IconStack: (props: IconStackProps) => import("react/jsx-runtime").JSX.Element;
export {};
