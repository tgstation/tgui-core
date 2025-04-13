import { type RefObject } from 'react';
import type { BoxProps } from './Box';
export type BaseInputProps = Partial<{
    /** Automatically focuses the input on mount */
    autoFocus: boolean;
    /** Automatically selects the input value on focus */
    autoSelect: boolean;
    /** Custom css classes */
    className: string;
    /** Disables the input. Outlined in gray */
    disabled: boolean;
    /**
     * Whether to debounce the onChange event.
     *
     * Do this if it's performing expensive ops on each input, like filtering or
     * sending the value immediate to Byond (via act).
     *
     * It will only fire once every 250ms.
     */
    expensive: boolean;
    /** Fills the parent container */
    fluid: boolean;
    /** Mark this if you want to use a monospace font */
    monospace: boolean;
}> & BoxProps;
export type TextInputProps = Partial<{
    /** The maximum length of the input value */
    maxLength: number;
    /** Fires each time the input has been changed */
    onChange: (value: string) => void;
    /** Fires once the enter key is pressed */
    onEnter: (value: string) => void;
    /** Fires once the escape key is pressed */
    onEscape: (value: string) => void;
    /** The placeholder text when everything is cleared */
    placeholder: string;
    /** Clears the input value on enter */
    selfClear: boolean;
    /**
     * Generally, input can handle its own state value. You might not NEED this.
     *
     * Use this if you want to hold the value in the parent for external
     * manipulation. For instance:
     *
     * ### Clearing the input
     * ```tsx
     * const [value, setValue] = useState('');
     *
     * return (
     *  <>
     *    <Button onClick={() => act('inputVal', {inputVal: value})}>
     *      Submit
     *    </Button>
     *    <Input
     *      value={value}
     *      onChange={setValue} />
     *    <Button onClick={() => setValue('')}>
     *      Clear
     *    </Button>
     *  </>
     * )
     * ```
     *
     * ### Updating the value from the backend
     * ```tsx
     * const { data } = useBackend<Data>();
     * const { valveSetting } = data;
     *
     * return (
     *  <Input
     *    value={valveSetting}
     *    onEnter={(value) => act('submit', { valveSetting: value })}
     *  />
     * )
     * ```
     */
    value: string;
}> & BaseInputProps;
type Props = Partial<{
    /** Ref of the input element */
    ref: RefObject<HTMLInputElement | null>;
}> & BaseInputProps & TextInputProps;
/**
 * ## Input
 *
 * A basic text input which allow users to enter text into a UI.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/Input.tsx
 */
export declare function Input(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
