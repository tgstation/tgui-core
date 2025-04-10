import { type CSSProperties, Component, type FocusEventHandler, type KeyboardEventHandler, type MouseEventHandler } from 'react';
import { type BooleanLike } from '../common/react';
import { type BoxProps } from './Box';
type Props = Required<{
    /** Highest possible value. */
    maxValue: number;
    /** Lowest possible value. */
    minValue: number;
    /** Adjust value by this amount when dragging the input. */
    step: number;
    /** Value itself. */
    value: number | string;
}> & Partial<{
    /** Animates the value if it was changed externally. */
    animated: BooleanLike;
    /** Custom class name. */
    className: BoxProps['className'];
    /** Makes the input field uneditable & non draggable to prevent user changes */
    disabled: BooleanLike;
    /** Fill all available horizontal space. */
    fluid: BooleanLike;
    /** Input font size */
    fontSize: CSSProperties['fontSize'];
    /** Format value using this function before displaying it. */
    format: (value: number) => string;
    /** Input height */
    height: CSSProperties['height'];
    /** Input line height */
    lineHeight: CSSProperties['lineHeight'];
    /** An event which fires when you release the input or successfully enter a number. */
    onChange: (value: number) => void;
    /** An event which fires about every 500ms when you drag the input up and down, on release and on manual editing. */
    onDrag: (value: number) => void;
    /** Screen distance mouse needs to travel to adjust value by one `step`. */
    stepPixelSize: number;
    /** Unit to display to the right of value. */
    unit: string;
    /** Width in Box units */
    width: BoxProps['width'];
}>;
type State = {
    currentValue: number;
    dragging: BooleanLike;
    editing: BooleanLike;
    origin: number;
    previousValue: number;
};
/**
 * ## NumberInput
 * A fancy, interactive number input, which you can either drag up and down
 * to fine tune the value, or single click it to manually type a number.
 */
export declare class NumberInput extends Component<Props, State> {
    inputRef: import("react").RefObject<HTMLInputElement | null>;
    dragTimeout: NodeJS.Timeout;
    dragInterval: NodeJS.Timeout;
    state: State;
    componentDidMount(): void;
    handleDragStart: MouseEventHandler<HTMLDivElement>;
    handleDragMove: (event: MouseEvent) => void;
    handleDragEnd: (_event: MouseEvent) => void;
    handleBlur: FocusEventHandler<HTMLInputElement>;
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
