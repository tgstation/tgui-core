import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { KEY, isEscape } from '../common/keys';
import { classes } from '../common/react';
import { computeBoxProps } from '../common/ui';
import type { TextInputProps } from './Input';

type Props = Partial<{
  /** Don't use tab for indent */
  dontUseTabForIndent: boolean;
  /** Ref to the textarea element. */
  ref: RefObject<HTMLTextAreaElement | null>;
  /**
   * Provides a Record with key: markupChar entries which can be used for
   * ctrl + key combinations to surround a selected text with the markup
   * character
   */
  userMarkup: Record<string, string>;
}> &
  TextInputProps;

function getMarkupString(
  inputText: string,
  markupType: string,
  startPosition: number,
  endPosition: number,
) {
  return `${inputText.substring(0, startPosition)}${markupType}${inputText.substring(startPosition, endPosition)}${markupType}${inputText.substring(endPosition)}`;
}

/**
 * ## Textarea
 *
 * An input for larger amounts of text. Use this when you want inputs larger
 * than one row.
 *
 * @see https://github.com/tgstation/tgui-core/blob/main/lib/components/TextArea.tsx
 */
export function TextArea(props: Props) {
  const {
    autoFocus,
    autoSelect,
    disabled,
    dontUseTabForIndent,
    fluid,
    maxLength,
    monospace,
    onChange,
    onEnter,
    onEscape,
    placeholder,
    ref,
    selfClear,
    userMarkup,
    ...rest
  } = props;

  const ourRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef = ref ?? ourRef;

  const [innerValue, setInnerValue] = useState(props.value ?? '');

  const boxProps = useMemo(() => {
    return computeBoxProps(rest);
  }, [rest]);

  const clsx = useMemo(() => {
    return classes([
      'Input',
      'TextArea',
      fluid && 'Input--fluid',
      monospace && 'Input--monospace',
      disabled && 'Input--disabled',
    ]);
  }, [disabled, fluid, monospace]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInnerValue(event.currentTarget.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    // Enter
    if (event.key === KEY.Enter && !event.shiftKey) {
      event.preventDefault();
      onEnter?.(event.currentTarget.value);
      if (selfClear) {
        setInnerValue('');
      }
      event.currentTarget.blur();
      return;
    }

    // Escape
    if (isEscape(event.key)) {
      onEscape?.(event.currentTarget.value);
      event.currentTarget.blur();
      return;
    }

    // Tab
    if (!dontUseTabForIndent && event.key === KEY.Tab) {
      event.preventDefault();
      const { value, selectionStart, selectionEnd } = event.currentTarget;
      setInnerValue(
        `${value.substring(0, selectionStart)}\t${value.substring(selectionEnd)}`,
      );
      event.currentTarget.selectionEnd = selectionStart + 1;
      onChange?.(event.currentTarget.value);
      return;
    }

    // User markup
    if (
      userMarkup &&
      (event.ctrlKey || event.metaKey) &&
      userMarkup[event.key]
    ) {
      event.preventDefault();

      const { selectionStart, selectionEnd, value } = event.currentTarget;
      const markupString = userMarkup[event.key];
      setInnerValue(
        getMarkupString(value, markupString, selectionStart, selectionEnd),
      );
      event.currentTarget.selectionEnd = selectionEnd + markupString.length * 2;
      onChange?.(event.currentTarget.value);
      return;
    }
  }

  /** Focuses the input on mount */
  useEffect(() => {
    if (autoFocus || autoSelect) {
      setTimeout(() => {
        textareaRef.current?.focus();
        if (autoSelect) {
          textareaRef.current?.select();
        }
      }, 1);
    }
  }, []);

  /** Updates the initial value on props change */
  useEffect(() => {
    if (document.activeElement === textareaRef.current) {
      if (props.value !== innerValue) {
        setInnerValue(props.value ?? '');
      }
    }
  }, [props.value]);

  return (
    <textarea
      {...boxProps}
      autoComplete="off"
      className={clsx}
      maxLength={maxLength}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      ref={textareaRef}
      spellCheck={false}
      value={innerValue}
    />
  );
}
