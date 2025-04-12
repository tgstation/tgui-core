import type { BaseInputProps } from './Input';
type Props = Partial<{
    /** Restricted inputs round by default.  */
    allowFloats: boolean;
    /** Max value. 10,000 by default. */
    maxValue: number;
    /** Min value. 0 by default. */
    minValue: number;
    /** Fires each time the input has been changed */
    onChange: (value: number) => void;
    /** Fires once the enter key is pressed */
    onEnter: (value: number) => void;
    /** Fires once the escape key is pressed */
    onEscape: (value: number) => void;
    /** Fires on input validation change */
    onValidationChange: (isValid: boolean) => void;
    /**
     * Generally, input can handle its own state value. You might not NEED this.
     *
     * Use this if you want to hold the value in the parent for external
     * manipulation. For instance:
     *
     * ### Clearing the input
     * ```tsx
     * const [value, setValue] = useState(1);
     *
     * return (
     *  <>
     *    <Button onClick={() => act('inputVal', {inputVal: value})}>
     *      Submit
     *    </Button>
     *    <RestrictedInput
     *      value={value}
     *      onChange={setValue} />
     *    <Button onClick={() => setValue(1)}>
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
     *  <RestrictedInput
     *    value={valveSetting}
     *    onEnter={(value) => act('submit', { valveSetting: value })}
     *  />
     * )
     * ```
     */
    value: number;
}> & BaseInputProps;
/**
 * ## RestrictedInput
 *
 * Creates a numerical input which rejects improper keys.
 *
 *  Has a special event for changes in validation states - `onValidationChange`.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/RestrictedInput.tsx
 */
export declare function RestrictedInput(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
