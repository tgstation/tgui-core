import { ReactNode } from 'react';
import { BoxProps } from './Box';

type Props = Partial<{
    buttons: ReactNode;
    icon: string;
    open: boolean;
    title: ReactNode;
}> & BoxProps;
export declare function Collapsible(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
