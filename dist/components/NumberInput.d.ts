import { Component, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, RefObject } from 'react';
import { BooleanLike } from '../common/react';

type Props = Required<{
    maxValue: number;
    minValue: number;
    step: number;
    value: number | string;
}> & Partial<{
    animated: BooleanLike;
    className: string;
    disabled: BooleanLike;
    fluid: BooleanLike;
    fontSize: string;
    format: (value: number) => string;
    height: string;
    lineHeight: string;
    onChange: (value: number) => void;
    onDrag: (value: number) => void;
    stepPixelSize: number;
    unit: string;
    width: string;
}>;
type State = {
    currentValue: number;
    dragging: BooleanLike;
    editing: BooleanLike;
    origin: number;
    previousValue: number;
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
