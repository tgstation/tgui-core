import { computeBoxProps } from 'lib/common/ui';
import { useEffect, useMemo, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
import { classes } from '../common/react';
import { debounce } from '../common/timer';

type Props = {
  /** The state variable of the input. */
  value: string | number;
} & Partial<{
  /** Automatically focuses the input on mount */
  autoFocus: boolean;
  /** Automatically selects the input value on focus */
  autoSelect: boolean;
  /** Custom css classes */
  className: string;
  /** Disables the input */
  disabled: boolean;
  /**
   * Whether to debounce the input.
   * Do this if it's performing expensive ops on each input
   */
  expensive: boolean;
  /** Mark this if you want the input to be as wide as possible */
  fluid: boolean;
  /** The maximum length of the input value */
  maxLength: number;
  /** Mark this if you want to use a monospace font */
  monospace: boolean;
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
  /** Auto-updates the input value on props change, ie, data from Byond */
  updateOnPropsChange: boolean;
}>;

type InputValue = string | number | undefined;

export function toInputValue(value: InputValue): string {
  return typeof value !== 'number' && typeof value !== 'string'
    ? ''
    : String(value);
}

// Prevent input parent change event from being called too often
const inputDebounce = debounce((onChange: () => void) => onChange(), 250);

/**
 * ## Input
 * A basic text input which allow users to enter text into a UI.
 */
export function Input(props: Props) {
  const {
    autoFocus,
    autoSelect,
    className,
    disabled,
    expensive,
    fluid,
    maxLength,
    monospace,
    onChange,
    onEnter,
    onEscape,
    placeholder,
    selfClear,
    updateOnPropsChange,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(props.value);

  const boxProps = useMemo(() => {
    return computeBoxProps(rest);
  }, [rest]);

  const clsx = useMemo(() => {
    return classes([
      'Input',
      disabled && 'Input--disabled',
      fluid && 'Input--fluid',
      monospace && 'Input--monospace',
      className,
    ]);
  }, [className, fluid, monospace]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget?.value;

    if (expensive) {
      inputDebounce(() => onChange?.(value));
    } else {
      onChange?.(value);
    }

    setInnerValue(value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEY.Enter) {
      event.preventDefault();
      onEnter?.(event.currentTarget.value);
      if (selfClear) {
        setInnerValue('');
      }
      event.currentTarget.blur();
      return;
    }

    if (isEscape(event.key)) {
      event.preventDefault();
      onEscape?.(event.currentTarget.value);
      event.currentTarget.blur();
    }
  }

  /** Focuses the input on mount */
  useEffect(() => {
    if (autoFocus || autoSelect) {
      setTimeout(() => {
        inputRef.current?.focus();
        if (autoSelect) {
          inputRef.current?.select();
        }
      }, 1);
    }
  }, []);

  /** Updates the value on props change */
  useEffect(() => {
    if (updateOnPropsChange && inputRef.current) {
      if (document.activeElement !== inputRef.current) {
        if (props.value !== innerValue) {
          setInnerValue(props.value);
        }
      }
    }
  }, [props.value]);

  return (
    <input
      {...boxProps}
      className={clsx}
      disabled={disabled}
      maxLength={maxLength}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={inputRef}
      value={innerValue}
    />
  );
}
