import { ReactNode } from 'react';
import { BoxProps } from './Box';

type Props = Partial<{
    buttons: ReactNode;
    open: boolean;
    title: ReactNode;
    icon: string;
}> & BoxProps;
export declare function Collapsible(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
