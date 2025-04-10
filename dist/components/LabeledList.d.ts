import type { PropsWithChildren, ReactNode } from 'react';
import { type BooleanLike } from '../common/react';
export declare function LabeledList(props: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
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
/**
 * ## LabeledList
 * LabeledList is a continuous, vertical list of text and other content, where
 * every item is labeled.
 *
 * It works just like a two column table, where first column is labels, and
 * second column is content.
 *
 * @example
 * ```tsx
 * <LabeledList>
 *   <LabeledList.Item label="Item">Content</LabeledList.Item>
 * </LabeledList>
 * ```
 *
 * If you want to have a button on the right side of an item (for example,
 * to perform some sort of action), there is a way to do that:
 *
 * @example
 * ```tsx
 * <LabeledList>
 *   <LabeledList.Item label="Item" buttons={<Button>Click me!</Button>}>
 *     Content
 *   </LabeledList.Item>
 * </LabeledList>
 * ```
 */
export declare namespace LabeledList {
    /**
     * Adds some empty space between LabeledList items.
     */
    const Divider: typeof LabeledListDivider;
    const Item: typeof LabeledListItem;
}
export {};
