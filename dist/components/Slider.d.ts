import { PropsWithChildren } from 'react';
import { BoxProps } from './Box';

type Props = {
    /** Highest possible value. */
    maxValue: number;
    /** Lowest possible value. */
    minValue: number;
    /** Value itself, controls the position of the cursor. */
    value: number;
} & Partial<{
    /** Animates the value if it was changed externally. */
    animated: boolean;
    /** Custom css */
    className: string;
    /** Color of the slider. */
    color: string;
    /** If set, this value will be used to set the fill percentage of the progress bar filler independently of the main value. */
    fillValue: number;
    /** Format value using this function before displaying it. */
    format: (value: number) => string;
    /** Adjust value by this amount when dragging the input. */
    onChange: (event: Event, value: number) => void;
    /** An event, which fires when you release the input, or successfully enter a number. */
    onDrag: (event: Event, value: number) => void;
    /** Applies a `color` to the slider based on whether the value lands in the range between `from` and `to`. */
    ranges: Record<string, [number, number]>;
    /** Screen distance mouse needs to travel to adjust value by one `step`. */
    step: number;
    /** A number in milliseconds, for which the input will hold off from updating while events propagate through the backend. Default is about 250ms, increase it if you still see flickering. */
    stepPixelSize: number;
    /** Adjust value by this amount when dragging the input. */
    suppressFlicker: boolean;
    /** Unit to display to the right of value. */
    unit: string;
}> & BoxProps & PropsWithChildren;
/**
 * ## Slider
 * A horizontal, progressbar-like control which allows dialing
 * in precise values by dragging it left and right.
 *
 * Single click opens an input box to manually type in a number.
 *
 */
export declare function Slider(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
