import { Component } from 'react';
type Props = {
    /**
     * The target value to approach.
     */
    value: number;
} & Partial<{
    /**
     * If provided, a function that formats the inner string. By default,
     * attempts to match the numeric precision of `value`.
     */
    format: (value: number) => string;
    /**
     * If provided, the initial value displayed. By default, the same as `value`.
     * If `initial` and `value` are different, the component immediately starts
     * animating.
     */
    initial: number;
}>;
/**
 * ## AnimatedNumber
 * An animated number label. Shows a number, formatted with an optionally
 * provided function, and animates it towards its target value.
 */
export declare class AnimatedNumber extends Component<Props> {
    /**
     * The inner `<span/>` being updated sixty times per second.
     */
    ref: import("react").RefObject<HTMLSpanElement | null>;
    /**
     * The interval being used to update the inner span.
     */
    interval?: NodeJS.Timeout;
    /**
     * The current value. This values approaches the target value.
     */
    currentValue: number;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(newProps: Props): boolean;
    /**
     * Starts animating the inner span. If the inner span is already animating,
     * this is a no-op.
     */
    startTicking(): void;
    /**
     * Stops animating the inner span.
     */
    stopTicking(): void;
    /**
     * Steps forward one frame.
     */
    tick(): void;
    /**
     * Gets the inner text of the span.
     */
    getText(): string;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
