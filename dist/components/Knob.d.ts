import { type BooleanLike } from '../common/react';
import type { BoxProps } from './Box';
type Props = {
    /** Value itself, controls the position of the cursor. */
    value: number;
} & Partial<{
    /** Animates the value if it was changed externally. */
    animated: boolean;
    /** Knob can be bipolar or unipolar. */
    bipolar: boolean;
    /** Color of the outer ring around the knob. */
    color: string | BooleanLike;
    /**
     * If set, this value will be used to set the fill percentage of the outer
     * ring independently of the main value.
     */
    fillValue: number;
    /** Format value using this function before displaying it. */
    format: (value: number) => string;
    /** Highest possible value. */
    maxValue: number;
    /** Lowest possible value. */
    minValue: number;
    /** Adjust value by this amount when dragging the input. */
    onChange: (event: Event, value: number) => void;
    /**
     * An event, which fires about every 500ms when you drag the input up and
     * down, on release and on manual editing.
     */
    onDrag: (event: Event, value: number) => void;
    /**
     * Applies a `color` to the outer ring around the knob based on whether the
     * value lands in the range between `from` and `to`.
     */
    ranges: Record<string, [number, number]>;
    /**
     * Relative size of the knob. `1` is normal size, `2` is two times bigger.
     * Fractional numbers are supported.
     */
    size: number;
    /** Adjust value by this amount when dragging the input. */
    step: number;
    /** Screen distance mouse needs to travel to adjust value by one `step`. */
    stepPixelSize: number;
    /** Whether to clamp the value to the range. */
    unclamped: boolean;
    /** Unit to display to the right of value. */
    unit: string;
}> & BoxProps;
/**
 * ## Knob
 * A radial control which allows dialing in precise values by dragging it
 * up and down.
 *
 * Single click opens an input box to manually type in a number.
 */
export declare function Knob(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
