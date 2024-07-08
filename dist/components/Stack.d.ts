import { RefObject } from 'react';
import { FlexItemProps, FlexProps } from './Flex';

type Props = Partial<{
    /** Fills available space. */
    fill: boolean;
    /** Reverses the stack. */
    reverse: boolean;
    /** Flex column */
    vertical: boolean;
    /** Adds zebra striping to the stack. */
    zebra: boolean;
}> & FlexProps;
export declare function Stack(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Stack {
    var Item: typeof StackItem;
    var Divider: typeof StackDivider;
}
type StackItemProps = FlexItemProps & Partial<{
    innerRef: RefObject<HTMLDivElement>;
}>;
declare function StackItem(props: StackItemProps): import("react/jsx-runtime").JSX.Element;
type StackDividerProps = FlexItemProps & Partial<{
    hidden: boolean;
}>;
declare function StackDivider(props: StackDividerProps): import("react/jsx-runtime").JSX.Element;
export {};
