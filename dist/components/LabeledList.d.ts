import { PropsWithChildren, ReactNode } from 'react';
import { BooleanLike } from '../common/react';

export declare function LabeledList(props: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export declare namespace LabeledList {
    var Item: typeof LabeledListItem;
    var Divider: typeof LabeledListDivider;
}
type LabeledListItemProps = Partial<{
    buttons: ReactNode;
    children: ReactNode;
    className: string | BooleanLike;
    color: string;
    /** @deprecated */
    content: any;
    key: string | number;
    label: string | ReactNode | BooleanLike;
    labelColor: string;
    labelWrap: boolean;
    textAlign: string;
    tooltip: string;
    verticalAlign: string;
}>;
declare function LabeledListItem(props: LabeledListItemProps): import("react/jsx-runtime").JSX.Element;
type LabeledListDividerProps = {
    size?: number;
};
declare function LabeledListDivider(props: LabeledListDividerProps): import("react/jsx-runtime").JSX.Element;
export {};
