import { PropsWithChildren, ReactNode } from 'react';
import { BoxProps } from './Box';

type Props = Partial<{
    className: string;
    fill: boolean;
    fluid: boolean;
    vertical: boolean;
}> & BoxProps & PropsWithChildren;
type TabProps = Partial<{
    className: string;
    color: string;
    icon: string;
    leftSlot: ReactNode;
    onClick: (e?: any) => void;
    rightSlot: ReactNode;
    selected: boolean;
}> & BoxProps & PropsWithChildren;
export declare const Tabs: {
    (props: Props): import("react/jsx-runtime").JSX.Element;
    Tab: (props: TabProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
