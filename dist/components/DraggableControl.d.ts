import { MouseEventHandler, ReactNode } from 'react';
import { BoxProps } from './Box';
type Control = {
    /** Tooltip-like node to display. */
    displayElement: ReactNode;
    /** The value to display. */
    displayValue: number;
    /** Whether the element is being dragged */
    dragging: boolean;
    /** Whether the input is currently being edited */
    editing: boolean;
    /** Attach this to the element you want to be draggable  */
    handleDragStart: MouseEventHandler<HTMLDivElement>;
    /** The input element. */
    inputElement: ReactNode;
};
type Props = {
    children: (control: Control) => ReactNode;
    /** The external state value. */
    value: number;
} & Partial<{
    /** Animates the value if it was changed externally. */
    animated: boolean;
    /** The matrix to use for the drag. */
    dragMatrix: [number, number];
    /** Format the value using this function before displaying it. */
    format: (value: number) => string;
    /** The maximum value. */
    maxValue: number;
    /** The minimum value. */
    minValue: number;
    /** An event which fires when you release the input, or successfully enter a number. */
    onChange: (event: Event, value: number) => void;
    /** An event which fires when you drag the input. */
    onDrag: (event: MouseEvent, value: number) => void;
    /** The step size. */
    step: number;
    /** The step size in pixels. */
    stepPixelSize: number;
    /** Whether to unclamp the value. */
    unclamped: boolean;
    /** The unit of the value. */
    unit: string;
    /** The rate at which the value is updated. */
    updateRate: number;
}> & Omit<BoxProps, 'children'>;
/**
 * ## DraggableControl
 *
 * A wrapper component for draggable elements.
 * Generally, you won't need to use this component directly.
 */
export declare function DraggableControl(props: Props): ReactNode;
export {};
