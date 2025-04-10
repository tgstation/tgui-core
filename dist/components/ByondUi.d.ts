import type { BoxProps } from './Box';
type SampleByondParams = Partial<{
    /** Can be auto-generated. */
    id: string;
    /**  Defaults to the current window */
    parent: string;
    /** The type of control. Read-only. */
    type: string;
    /** Text shown in label/button/input. For input controls this setting is only available at runtime. */
    text: string;
}>;
type Props = Partial<{
    /** An object with parameters, which are directly passed to
     * the `winset` proc call.
     *
     * You can find a full reference of these parameters
     * in [BYOND controls and parameters guide](https://secure.byond.com/docs/ref/skinparams.html). */
    params: SampleByondParams & Record<string, any>;
}> & BoxProps;
/**
 * ## ByondUi
 * Displays a BYOND UI element on top of the browser, and leverages browser's
 * layout engine to position it just like any other HTML element. It is
 * especially useful if you want to display a secondary game map in your
 * interface.
 *
 * @example
 * ```tsx
 * <ByondUi
 *   params={{
 *    id: 'test_button', // optional, can be auto-generated
 *    parent: 'some_container', // optional, defaults to the current window
 *    type: 'button',
 *    text: 'Hello, world!',
 *   }} />
 * ```
 *
 * @example
 * ```tsx
 * <ByondUi
 *   params={{
 *    id: 'test_map',
 *    type: 'map',
 *   }} />
 * ```
 *
 * It supports a full set of `Box` properties for layout purposes.
 */
export declare function ByondUi(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
