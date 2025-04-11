import { clamp } from 'lib/common/math';
import { classes } from 'lib/common/react';
import { computeBoxProps } from 'lib/common/ui';
import { useEffect, useMemo, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
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
  /** Disables the input. */
  disabled: boolean;
  /** Sets width to 100% of the parent. */
  fluid: boolean;
  /** Max value. 10,000 by default. */
  maxValue: number;
  /** Mark this if you want to use a monospace font. */
  monospace: boolean;
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
    monospace,
    onChange,
    onEnter,
    onEscape,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(props.value);

  const boxProps = useMemo(() => {
    return computeBoxProps(rest);
  }, [rest]);

  // We meet again
  const clsx = useMemo(() => {
    return classes([
      'Input',
      'RestrictedInput',
      disabled && 'Input--disabled',
      fluid && 'Input--fluid',
      monospace && 'Input--monospace',
      className,
    ]);
  }, [className, fluid, monospace]);

  function updateValue(value: number) {
    if (value === innerValue) return;

    let newValue = value;
    if (Number.isNaN(value)) {
      newValue = minValue;
    } else if (!allowFloats) {
      newValue = Math.round(value);
    }

    newValue = clamp(newValue, minValue, maxValue);
    setInnerValue(newValue);
    onChange?.(newValue);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    updateValue(Number(event.target.value));
  }

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
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
      updateValue(innerValue * -1);
      return;
    }
  }

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

  useEffect(() => {
    if (props.value !== innerValue) {
      setInnerValue(props.value);
    }
  }, [props.value]);

  return (
    <input
      {...boxProps}
      className={clsx}
      disabled={disabled}
      max={maxValue}
      min={minValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      type="number"
      value={innerValue}
    />
  );
}
