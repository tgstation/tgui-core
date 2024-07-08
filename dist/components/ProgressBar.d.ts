import { PropsWithChildren } from 'react';
import { BoxProps } from './Box';

type Props = {
    /**
     * Current progress as a floating point number between `minValue` (default: 0) and `maxValue` (default: 1).
     * Determines the percentage and how filled the bar is.
     */
    value: number;
} & Partial<{
    /**
     * Color of the progress bar. Can take any of the following formats:
     * - `#ffffff` - Hex format
     * - `rgb(r,g,b) / rgba(r,g,b,a)` - RGB format
     * - `<name>` - the name of a `color-<name>` CSS class. See `CSS_COLORS` in `constants.js`.
     * - `<name>` - the name of a base CSS color, if not overridden by the definitions above.
     */
    color: string;
    /** Highest possible value. */
    maxValue: number;
    /** Lowest possible value. */
    minValue: number;
    /**
     * Applies a `color` to the progress bar based on whether the value lands in the range between `from` and `to`.
     * This takes an object with the following format:
     * ```tsx
     * {
     *   (colorname): [from, to]
     * }
     * ```
     * For example:
     * ```tsx
     * <ProgressBar
     *   value={0.5}
     *   ranges={{
     *     bad: [0, 0.5],
     *     good: [0.5, 1],
     *   }}
     * />
     * ```
     *
     */
    ranges: Record<string, [number, number]>;
}> & BoxProps & PropsWithChildren;
export declare function ProgressBar(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
