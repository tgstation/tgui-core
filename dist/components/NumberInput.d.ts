import { BooleanLike } from '../common/react';
import { Component, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, RefObject } from 'react';

type Props = Required<{
    value: number | string;
    minValue: number;
    maxValue: number;
    step: number;
}> & Partial<{
    stepPixelSize: number;
    disabled: BooleanLike;
    className: string;
    fluid: BooleanLike;
    animated: BooleanLike;
    unit: string;
    height: string;
    width: string;
    lineHeight: string;
    fontSize: string;
    format: (value: number) => string;
    onChange: (value: number) => void;
    onDrag: (value: number) => void;
}>;
type State = {
    editing: BooleanLike;
    dragging: BooleanLike;
    currentValue: number;
    previousValue: number;
    origin: number;
};
export declare class NumberInput extends Component<Props, State> {
    inputRef: RefObject<HTMLInputElement>;
    dragTimeout: NodeJS.Timeout;
    dragInterval: NodeJS.Timeout;
    state: State;
    constructor(props: Props);
    componentDidMount(): void;
    handleDragStart: MouseEventHandler<HTMLDivElement>;
    handleDragMove: (event: MouseEvent) => void;
    handleDragEnd: (_event: MouseEvent) => void;
    handleBlur: FocusEventHandler<HTMLInputElement>;
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
