import { classes } from 'lib/common/react';
import { debounce } from 'lib/common/timer';
import { computeBoxClassName, computeBoxProps } from 'lib/common/ui';
import { useEffect, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
import type { BaseInputProps } from './Input';

type Props = Partial<{
  /** Restricted inputs round by default.  */
  allowFloats: boolean;
  /** Max value. 10,000 by default. */
  maxValue: number;
  /** Min value. 0 by default. */
  minValue: number;
  /** Fires each time focus leaves the input, including if Esc or Enter are pressed */
  onBlur: (value: number) => void;
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
}> &
  BaseInputProps;

// Prevent input parent change event from being called too often
const inputDebounce = debounce((onChange: () => void) => onChange(), 250);

/**
 * ## RestrictedInput
 *
 * Creates a numerical input which rejects improper keys.
 *
 *  Has a special event for changes in validation states - `onValidationChange`.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/RestrictedInput.tsx
 */
export function RestrictedInput(props: Props) {
  const {
    allowFloats,
    autoFocus,
    autoSelect,
    className,
    disabled,
    expensive,
    fluid,
    maxValue = 10000,
    minValue = 0,
    monospace,
    onBlur,
    onChange,
    onEnter,
    onEscape,
    onKeyDown,
    onValidationChange,
    value,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(value ?? minValue);
  const [isValid, setIsValid] = useState(true);

  function tryOnChange(newValue: number) {
    if (!onChange) return;
    if (expensive) {
      inputDebounce(() => onChange(newValue));
    } else {
      onChange(newValue);
    }
  }

  function onBlurHandler(_event: React.FocusEvent<HTMLInputElement>) {
    onBlur?.(innerValue);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value);
    setInnerValue(newValue);
    tryOnChange(newValue);
  }

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    onKeyDown?.(event);

    if (event.key === KEY.Enter) {
      event.preventDefault();
      onEnter?.(innerValue);
      inputRef.current?.blur();
      return;
    }
    if (isEscape(event.key)) {
      event.preventDefault();
      onEscape?.(innerValue);
      inputRef.current?.blur();
      return;
    }
    if (event.key === KEY.Minus) {
      event.preventDefault();
      const newValue = innerValue * -1;
      setInnerValue(newValue);
      tryOnChange(newValue);
      return;
    }
  }

  /** Focuses the input on mount */
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (autoFocus || autoSelect) {
      timeout = setTimeout(() => {
        inputRef.current?.focus();
        if (autoSelect) {
          inputRef.current?.select();
        }
      }, 1);
    }

    return () => clearTimeout(timeout);
  }, []);

  /** Check validity on input change */
  useEffect(() => {
    if (inputRef.current) {
      const formValid = inputRef.current.validity.valid;
      if (isValid !== formValid) {
        setIsValid(formValid);
        onValidationChange?.(formValid);
      }
    }
  }, [innerValue]);

  /** Updates the value on props change */
  useEffect(() => {
    if (
      inputRef.current &&
      document.activeElement !== inputRef.current &&
      value !== innerValue
    ) {
      setInnerValue(value ?? minValue);
    }
  }, [value]);

  const boxProps = computeBoxProps(rest);
  const clsx = classes([
    'Input',
    'RestrictedInput',
    disabled && 'Input--disabled',
    fluid && 'Input--fluid',
    monospace && 'Input--monospace',
    computeBoxClassName<HTMLInputElement>(rest),
    className,
    !isValid && 'RestrictedInput--invalid',
  ]);

  return (
    <input
      {...boxProps}
      autoComplete="off"
      className={clsx}
      disabled={disabled}
      max={maxValue}
      min={minValue}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      spellCheck={false}
      step={allowFloats ? 'any' : '1'}
      type="number"
      value={innerValue}
    />
  );
}
