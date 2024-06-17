import { FlexProps } from './Flex';

export declare function LabeledControls(props: FlexProps): import("react/jsx-runtime").JSX.Element;
export declare namespace LabeledControls {
    var Item: typeof LabeledControlsItem;
}
type ItemProps = {
    label: string;
} & FlexProps;
declare function LabeledControlsItem(props: ItemProps): import("react/jsx-runtime").JSX.Element;
export {};
