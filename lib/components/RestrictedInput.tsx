import { clamp } from 'lib/common/math';
import { useEffect, useRef } from 'react';
import { KEY, isEscape } from '../common/keys';
import { classes } from '../common/react';
import { computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';

type Props = {
  /** The current value of the input. */
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
  const innerValue = useRef(props.value);

  function updateValue(value: number) {
    if (value === innerValue.current) return;

    let newValue = value;
    if (Number.isNaN(value)) {
      newValue = minValue;
    } else if (!allowFloats) {
      newValue = Math.round(value);
    }

    newValue = clamp(newValue, minValue, maxValue);
    innerValue.current = newValue;
    if (inputRef.current) {
      inputRef.current.value = newValue.toString();
    }
    onChange?.(newValue);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    updateValue(Number(event.target.value));
  }

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEY.Enter) {
      event.preventDefault();
      onEnter?.(innerValue.current);
      inputRef.current?.blur();
    } else if (isEscape(event.key)) {
      event.preventDefault();
      onEscape?.(innerValue.current);
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
    updateValue(props.value);
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
      value={innerValue.current}
    />
  );
}
