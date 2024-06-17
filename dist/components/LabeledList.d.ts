import { BooleanLike } from '../common/react';
import { PropsWithChildren, ReactNode } from 'react';

export declare const LabeledList: {
    (props: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
    Item: (props: LabeledListItemProps) => import("react/jsx-runtime").JSX.Element;
    Divider: (props: LabeledListDividerProps) => import("react/jsx-runtime").JSX.Element;
};
type LabeledListItemProps = Partial<{
    buttons: ReactNode;
    className: string | BooleanLike;
    color: string;
    key: string | number;
    label: string | ReactNode | BooleanLike;
    labelColor: string;
    labelWrap: boolean;
    textAlign: string;
    /** @deprecated */
    content: any;
    children: ReactNode;
    verticalAlign: string;
    tooltip: string;
}>;
type LabeledListDividerProps = {
    size?: number;
};
export {};
