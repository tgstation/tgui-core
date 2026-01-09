import { isEscape, KEY } from '@common/keys';
import { classes } from '@common/react';
import { debounce } from '@common/timer';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import { type RefObject, useEffect, useRef, useState } from 'react';
import type { BoxProps } from './Box';

/** Takes two optional params: The dom element type & the input type */
export type BaseInputProps<
  TElement = HTMLInputElement,
  // Restricted inputs are number based
  TInput = string,
> = Partial<{
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
  /** Fires each time focus leaves the input, including if Esc or Enter are pressed */
  onBlur: (value: TInput) => void;
  /**
   * Fires each time the input has been changed. You do not need to enter the second param unless you're using it. All of these are valid:
   *
   * @example
   * ```tsx
   * <Input onChange={(value) => console.log(value)} />
   * <Input onChange={(value, event) => console.log(value, event)} />
   * <Input onChange={console.log} /> // This will log the value and the event
   * <Input onChange={setValue} /> // This will just change the value state
   * ```
   */
  onChange: (value: TInput, event?: React.ChangeEvent<TElement>) => void;
  /** Fires once the enter key is pressed */
  onEnter: (value: TInput, event?: React.KeyboardEvent<TElement>) => void;
  /** Fires once the escape key is pressed */
  onEscape: (value: TInput, event?: React.KeyboardEvent<TElement>) => void;
  monospace: boolean;
  /** Allows to toggle on spellcheck on inputs */
  spellcheck: boolean;
  /**
   * Generally, input can handle its own state value. You might not NEED this.
   *
   * Use this if you want to hold the value in the parent for external
   * manipulation. For instance:
   *
   * Clearing the input
   *
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
   * Updating the value from the backend
   *
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
  value: TInput;
}> &
  BoxProps<TElement>;

export type TextInputProps<TElement = HTMLInputElement> = Partial<{
  /** The maximum length of the input value */
  maxLength: number;
  /** The placeholder text when everything is cleared */
  placeholder: string;
  /** Ref of the input element */
  ref: RefObject<TElement | null>;
  /** Clears the input value on enter */
  selfClear: boolean;
}> &
  BaseInputProps<TElement>;

// Prevent input parent change event from being called too often
const inputDebounce = debounce((onChange: () => void) => onChange(), 250);

/**
 * ## Input
 *
 * A basic text input which allow users to enter text into a UI.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-input--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function Input(props: TextInputProps) {
  const {
    autoFocus,
    autoSelect,
    className,
    disabled,
    expensive,
    fluid,
    maxLength,
    monospace,
    placeholder,
    ref,
    selfClear,
    spellcheck = false,
    value,
    ...rest
  } = props;

  const ourRef = useRef<HTMLInputElement>(null);
  const inputRef = ref ?? ourRef;

  const [innerValue, setInnerValue] = useState(value ?? '');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.currentTarget.value;
    setInnerValue(value);
    if (expensive) {
      inputDebounce(() => props.onChange?.(value, event));
    } else {
      props.onChange?.(value, event);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    props.onKeyDown?.(event);

    if (event.key === KEY.Enter) {
      event.preventDefault();
      props.onEnter?.(event.currentTarget.value, event);
      if (selfClear) {
        setInnerValue('');
      }
      event.currentTarget.blur();
      return;
    }

    if (isEscape(event.key)) {
      event.preventDefault();
      props.onEscape?.(event.currentTarget.value, event);
      event.currentTarget.blur();
    }
  }

  /** Focuses the input on mount */
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoFocus || autoSelect) {
      timer = setTimeout(() => {
        inputRef.current?.focus();
        if (autoSelect) {
          inputRef.current?.select();
        }
      }, 1);
    }

    return () => clearTimeout(timer);
  }, []);

  /** Updates the value on props change */
  useEffect(() => {
    if (
      inputRef.current &&
      document.activeElement !== inputRef.current &&
      value !== innerValue
    ) {
      setInnerValue(value ?? '');
    }
  }, [value]);

  const boxProps = computeBoxProps(rest);
  const clsx = classes([
    'Input',
    disabled && 'Input--disabled',
    fluid && 'Input--fluid',
    monospace && 'Input--monospace',
    computeBoxClassName<HTMLInputElement>(rest),
    className,
  ]);

  return (
    <input
      {...boxProps}
      autoComplete="off"
      className={clsx}
      disabled={disabled}
      maxLength={maxLength}
      onBlur={() => props.onBlur?.(innerValue)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={inputRef}
      spellCheck={spellcheck}
      type="text"
      value={innerValue}
    />
  );
}
