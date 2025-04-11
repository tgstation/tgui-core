import { type RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { KEY, isEscape } from '../common/keys';
import { classes } from '../common/react';
import { debounce } from '../common/timer';
import { computeBoxProps } from '../common/ui';
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
  /** Fills the parent container */
  fluid: boolean;
  /** Mark this if you want to use a monospace font */
  monospace: boolean;
}> &
  BoxProps;

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
   * Generally, input can handle its own state value.
   *
   * Use this if you want to hold the value in the parent for external manipulation.
   *
   * ```tsx
   * const [value, setValue] = useState('');
   *
   * return (
   *  <>
   *    <Button onClick={() => act('inputVal', {inputVal: value})}>
   *      Submit
   *    </Button>
   *    <Input value={value} onChange={setValue} />
   *    <Button onClick={() => setValue('')}>
   *      Clear
   *    </Button>
   *  </>
   * )
   * ```
   */
  value: string;
}> &
  BaseInputProps;

type Props = Partial<{
  /**
   * Whether to debounce the input.
   * Do this if it's performing expensive ops on each input.
   * It will only fire once every 250ms.
   */
  expensive: boolean;
  /** Ref of the input element */
  ref: RefObject<HTMLInputElement | null>;
  /** Auto-updates the input value on props change, ie, data from Byond */
  updateOnPropsChange: boolean;
}> &
  BaseInputProps &
  TextInputProps;

// Prevent input parent change event from being called too often
const inputDebounce = debounce((onChange: () => void) => onChange(), 250);

/**
 * ## Input
 *
 * A basic text input which allow users to enter text into a UI.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/Input.tsx
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
    ref,
    selfClear,
    updateOnPropsChange,
    ...rest
  } = props;

  const ourRef = useRef<HTMLInputElement>(null);
  const inputRef = ref ?? ourRef;

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
    if (updateOnPropsChange && inputRef.current) {
      if (document.activeElement !== inputRef.current) {
        if (props.value !== innerValue) {
          setInnerValue(props.value ?? '');
        }
      }
    }
  }, [props.value]);

  return (
    <input
      {...boxProps}
      autoComplete="off"
      className={clsx}
      disabled={disabled}
      maxLength={maxLength}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={inputRef}
      type="text"
      value={innerValue}
      spellCheck={false}
    />
  );
}
