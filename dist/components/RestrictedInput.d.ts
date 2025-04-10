import type { BoxProps } from './Box';
type Props = {
    value: number;
} & Partial<{
    allowFloats: boolean;
    autoFocus: boolean;
    autoSelect: boolean;
    disabled: boolean;
    fluid: boolean;
    maxValue: number | null;
    minValue: number | null;
    onBlur: (e: Event, value: number) => void;
    onChange: (e: Event, value: number) => void;
    onEnter: (e: Event, value: number) => void;
}> & BoxProps;
/**
 * ## RestrictedInput
 * Creates an input which rejects improper keys.
 *
 * @deprecated Use `NumberInput` instead.
 *
 * This will server as a wrapper for NumberInput until removal. This decision was
 * made because it's poor UX. Users should be allowed to type in whatever they
 * want, but have the UI notify them it's invalid after it's entered.
 *
 * It also gives a false sense of security. It's just an annoying input.
 */
export declare function RestrictedInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
