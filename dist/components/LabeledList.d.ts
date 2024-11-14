import { PropsWithChildren, ReactNode } from 'react';
import { BooleanLike } from '../common/react';
export declare function LabeledList(props: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export declare namespace LabeledList {
    var Item: typeof LabeledListItem;
    var Divider: typeof LabeledListDivider;
}
type LabeledListItemProps = Partial<{
    /** Buttons to render aside the content. */
    buttons: ReactNode;
    /** Content of this labeled item. */
    children: ReactNode;
    /** Applies a CSS class to the element. */
    className: string | BooleanLike;
    /** Sets the color of the content text. */
    color: string;
    /** @deprecated */
    content: any;
    /**
     * Sometimes this does not properly register in TS.
     * See [react key docs](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) for more info.
     */
    key: string | number;
    /** Item label. Appends a colon at the end. */
    label: ReactNode;
    /** Sets the color of the label. */
    labelColor: string;
    /** Lets the label wrap and makes it not take the minimum width. */
    labelWrap: boolean;
    /**
     * Align the content text.
     *
     * - `left` (default)
     * - `center`
     * - `right`
     */
    textAlign: string;
    /** Tooltip text. */
    tooltip: string;
    /**
     * Align both the label and the content vertically.
     *
     * - `baseline` (default)
     * - `top`
     * - `middle`
     * - `bottom`
     */
    verticalAlign: string;
}>;
declare function LabeledListItem(props: LabeledListItemProps): import("react/jsx-runtime").JSX.Element;
type LabeledListDividerProps = {
    /** Size of the divider. */
    size?: number;
};
declare function LabeledListDivider(props: LabeledListDividerProps): import("react/jsx-runtime").JSX.Element;
export {};
