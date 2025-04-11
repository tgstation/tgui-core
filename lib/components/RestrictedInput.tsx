import { clamp } from 'lib/common/math';
import { useEffect, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
import { classes } from '../common/react';
import { computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';

type Props = {
  /**
   * The current value of the input.
   *
   * Use a useState only when you need to send the current value outside of an
   * interaction with the input (say, a submit button press).
   *
   * Otherwise, this component can manage its own state just fine. It will
   * rerender when the passed value changes.
   */
  value: number;
} & Partial<{
  /** Restricted inputs round by default.  */
  allowFloats: boolean;
  /** Focuses on mount. */
  autoFocus: boolean;
  /** Selects any text in the input on mount. Assumes `autoFocus`. */
  autoSelect: boolean;
  /** Disable the input. */
  disabled: boolean;
  /** Sets width to 100% of the parent. */
  fluid: boolean;
  /** Max value. 10,000 by default. */
  maxValue: number;
  /** Min value. 0 by default. */
  minValue: number;
  /** Called each time the value changes. */
  onChange: (value: number) => void;
  /** Called when the Enter key is pressed. Returns the current value. */
  onEnter: (value: number) => void;
  /** Called when the Escape key is pressed. */
  onEscape: (value: number) => void;
}> &
  BoxProps;

/**
 * ## RestrictedInput
 * Creates a numerical input which rejects improper keys.
 */
export function RestrictedInput(props: Props) {
  const {
    allowFloats,
    autoFocus,
    autoSelect,
    className,
    disabled,
    fluid,
    maxValue = 10000,
    minValue = 0,
    onChange,
    onEnter,
    onEscape,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(props.value);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const eventValue = Number(event.target.value);
    if (Number.isNaN(eventValue)) {
      setValue(minValue);
    } else {
      const newValue = allowFloats ? eventValue : Math.round(eventValue);
      setValue(newValue);
    }

    onChange?.(value);
  }

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEY.Enter) {
      event.preventDefault();
      onEnter?.(value);
      inputRef.current?.blur();
    } else if (isEscape(event.key)) {
      event.preventDefault();
      onEscape?.(value);
      inputRef.current?.blur();
    }
  }

  useEffect(() => {
    if (autoFocus || autoSelect) {
      inputRef.current?.focus();
      if (autoSelect) {
        inputRef.current?.select();
      }
    }
  }, []);

  useEffect(() => {
    const clamped = clamp(props.value, minValue, maxValue);

    if (clamped !== value) {
      setValue(clamped);
    }
  }, [props.value]);

  const boxProps = computeBoxProps(rest);

  return (
    <input
      {...boxProps}
      className={classes([
        'Input',
        'RestrictedInput',
        disabled && 'Input--disabled',
        fluid && 'Input--fluid',
        className,
      ])}
      disabled={disabled}
      max={maxValue}
      min={minValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      type="number"
      value={value}
    />
  );
}
