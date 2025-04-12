import { clamp } from 'lib/common/math';
import { classes } from 'lib/common/react';
import { debounce } from 'lib/common/timer';
import { computeBoxProps } from 'lib/common/ui';
import { useEffect, useMemo, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
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
  /**
   * Generally, input can handle its own state value.
   *
   * Use this if you want to hold the value in the parent for external manipulation.
   *
   * ```tsx
   * const [value, setValue] = useState(1;
   *
   * return (
   *  <>
   *    <Button onClick={() => act('inputVal', {inputVal: value})}>
   *      Submit
   *    </Button>
   *    <RestrictedInput value={value} onChange={setValue} />
   *    <Button onClick={() => setValue(1)}>
   *      Clear
   *    </Button>
   *  </>
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
    onChange,
    onEnter,
    onEscape,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(props.value ?? minValue);

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

  /** Clamps the value to min/max */
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
    if (!onChange) return;
    if (expensive) {
      inputDebounce(() => onChange(newValue));
    } else {
      onChange(newValue);
    }
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

  /** Updates the value on props change */
  useEffect(() => {
    if (
      document.activeElement !== inputRef.current &&
      props.value !== innerValue
    ) {
      setInnerValue(props.value ?? minValue);
    }
  }, [props.value]);

  return (
    <input
      {...boxProps}
      autoComplete="off"
      className={clsx}
      disabled={disabled}
      max={maxValue}
      min={minValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      spellCheck={false}
      type="number"
      value={innerValue}
    />
  );
}
