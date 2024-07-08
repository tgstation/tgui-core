import { BoxProps } from './Box';

type Props = {
    /** The current value of the metric. */
    value: number;
} & Partial<{
    /** When provided, will cause an alert symbol on the gauge to begin flashing in the color upon which the needle currently rests, as defined in `ranges`. */
    alertAfter: number;
    /** As with alertAfter, but alerts below a value. If both are set, and alertAfter comes earlier, the alert will only flash when the needle is between both values. Otherwise, the alert will flash when on the active side of either threshold. */
    alertBefore: number;
    /** CSS style. */
    className: string;
    /** When provided, will be used to format the value of the metric for display. */
    format: (value: number) => string;
    /** The upper bound of the gauge. */
    maxValue: number;
    /** The lower bound of the gauge. */
    minValue: number;
    /** Provide regions of the gauge to color between two specified values of the metric. */
    ranges: Record<string, [number, number]>;
    /** When provided scales the gauge. */
    size: number;
    /** Custom css */
    style: React.CSSProperties;
}> & BoxProps;
/**
 * ## RoundGauge
 * The RoundGauge component provides a visual representation of a single metric, as well as being capable of showing
 * informational or cautionary boundaries related to that metric.
 *
 * @example
 * ```tsx
 * <RoundGauge
 *  size={1.75}
 *  value={tankPressure}
 *  minValue={0}
 *  maxValue={pressureLimit}
 *  alertAfter={pressureLimit * 0.7}
 *  ranges={{
 *     good: [0, pressureLimit * 0.7],
 *     average: [pressureLimit * 0.7, pressureLimit * 0.85],
 *     bad: [pressureLimit * 0.85, pressureLimit],
 *   }}
 *   format={formatPressure}
 * />
 * ```
 *
 * The alert on the gauge is optional, and will only be shown if the `alertAfter` prop is defined. When defined, the alert
 * will begin to flash the respective color upon which the needle currently rests, as defined in the `ranges` prop.
 *
 */
export declare function RoundGauge(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
