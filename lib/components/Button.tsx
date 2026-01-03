import { isEscape, KEY } from '@common/keys';
import { type BooleanLike, classes } from '@common/react';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import type { Placement } from '@floating-ui/react';
import {
  type CSSProperties,
  createRef,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, type BoxProps } from './Box';
import { Icon } from './Icon';
import { Tooltip } from './Tooltip';

/**
 * Getting ellipses to work requires that you use:
 * 1. A string rather than a node
 * 2. A fixed width here or in a parent
 * 3. Children prop rather than content
 */
type EllipsisUnion =
  | {
      children: string;
      /** @deprecated use children instead */
      content?: never;
      /** Cuts off text with an ellipsis */
      ellipsis: true;
    }
  | Partial<{
      children: ReactNode;
      /** @deprecated use children instead */
      content: ReactNode;
      ellipsis: undefined;
    }>;

type Props = Partial<{
  /** Captures keyboard events */
  captureKeys: boolean;
  /** Makes the button circular */
  circular: boolean;
  /** Reduces the padding of the button */
  compact: boolean;
  /** The styles to be passed to Button__content */
  innerStyle: CSSProperties;
  /** Disables button and makes it semi-transparent */
  disabled: BooleanLike;
  /** Fill all available horizontal space */
  fluid: boolean;
  /** Adds an icon to the button */
  icon: string | false;
  /** Icon color */
  iconColor: string;
  /** Icon position */
  iconPosition: string;
  /** Icon rotation */
  iconRotation: number;
  /** Icon size */
  iconSize: number;
  /** Makes the icon spin */
  iconSpin: BooleanLike;
  /** Called when the button is blurred */
  onBlur: (e: any) => void;
  /** Called when element is clicked */
  onClick: (e: any) => void;
  /** Activates the button (gives it a green color) */
  selected: BooleanLike;
  /** A fancy, boxy tooltip, which appears when hovering over the button */
  tooltip: ReactNode;
  /** Position of the tooltip. Does not guarantee the position is respected. */
  tooltipPosition: Placement;
  /** Align content vertically using flex. Use lineHeight if the height is static. */
  verticalAlignContent: string;
}> &
  EllipsisUnion &
  BoxProps;

export function Button(props: Props) {
  const {
    captureKeys = true,
    children,
    circular,
    className,
    color,
    compact,
    content,
    innerStyle,
    disabled,
    ellipsis,
    fluid,
    icon,
    iconColor,
    iconPosition,
    iconRotation,
    iconSize,
    iconSpin,
    onClick,
    selected,
    tooltip,
    tooltipPosition,
    verticalAlignContent,
    ...rest
  } = props;

  const toDisplay: ReactNode = content || children;

  const buttonIcon = (
    <Icon
      className="Button--icon"
      color={iconColor}
      name={icon || ''}
      rotation={iconRotation}
      size={iconSize}
      spin={iconSpin}
    />
  );

  let buttonContent = (
    <div
      className={classes([
        'Button',
        fluid && 'Button--fluid',
        disabled && 'Button--disabled',
        selected && 'Button--selected',
        circular && 'Button--circular',
        compact && 'Button--compact',
        !toDisplay && 'Button--empty',
        icon && 'Button--hasIcon',
        iconPosition && `Button--icon-${iconPosition}`,
        verticalAlignContent && 'Button--flex',
        verticalAlignContent && fluid && 'Button--flex--fluid',
        verticalAlignContent &&
          `Button--verticalAlignContent--${verticalAlignContent}`,
        `Button--color--${color || 'default'}`,
        className,
        computeBoxClassName(rest),
      ])}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }}
      onKeyDown={(event) => {
        if (!captureKeys) {
          return;
        }

        // Simulate a click when pressing space or enter.
        if (event.key === KEY.Space || event.key === KEY.Enter) {
          event.preventDefault();
          if (!disabled && onClick) {
            onClick(event);
          }
          return;
        }

        // Refocus layout on pressing escape.
        if (isEscape(event.key)) {
          event.preventDefault();
        }
      }}
      tabIndex={!disabled ? 0 : undefined}
      {...computeBoxProps(rest)}
    >
      <div className="Button__content" style={innerStyle}>
        {icon && iconPosition !== 'right' && buttonIcon}
        {!ellipsis ? (
          toDisplay
        ) : (
          <span className="Button--ellipsis">{toDisplay}</span>
        )}
        {icon && iconPosition === 'right' && buttonIcon}
      </div>
    </div>
  );

  if (tooltip) {
    buttonContent = (
      <Tooltip content={tooltip} position={tooltipPosition as Placement}>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
}

type CheckProps = Partial<{
  checked: BooleanLike;
}> &
  Props;

function ButtonCheckbox(props: CheckProps) {
  const { checked, ...rest } = props;

  return (
    <Button
      color="transparent"
      icon={checked ? 'check-square-o' : 'square-o'}
      selected={checked}
      {...rest}
    />
  );
}

type ConfirmProps = Partial<{
  confirmColor: string;
  confirmContent: ReactNode;
  confirmIcon: string;
}> &
  Props;

function ButtonConfirm(props: ConfirmProps) {
  const {
    children,
    color,
    confirmColor = 'bad',
    confirmContent = 'Confirm?',
    confirmIcon,
    ellipsis = true,
    icon,
    onBlur,
    onClick,
    ...rest
  } = props;
  const [clickedOnce, setClickedOnce] = useState(false);

  function handleBlur(event: FocusEvent): void {
    setClickedOnce(false);
    onBlur?.(event);
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
    if (!clickedOnce) {
      setClickedOnce(true);
      return;
    }

    onClick?.(event);
    setClickedOnce(false);
  }

  return (
    <Button
      color={clickedOnce ? confirmColor : color}
      icon={clickedOnce ? confirmIcon : icon}
      onBlur={handleBlur}
      onClick={handleClick}
      {...rest}
    >
      {clickedOnce ? confirmContent : children}
    </Button>
  );
}

type InputProps = Partial<{
  /** Text to display on the button exclusively. If left blank, displays the value */
  buttonText: string;
  /** Use the value prop. This is done to be uniform with other inputs. */
  children: never;
  /** Max length of the input */
  maxLength: number;
  /** Action on outside click or enter key */
  onCommit: (value: string) => void;
  /** Reference to the inner input */
  ref: RefObject<HTMLInputElement | null>;
  /** The value of the input */
  value: string;
}> &
  Props;

function ButtonInput(props: InputProps) {
  const {
    buttonText,
    children,
    color = 'default',
    disabled,
    fluid,
    icon,
    iconRotation,
    iconSpin,
    maxLength,
    onCommit,
    ref,
    value = '',
    ...rest
  } = props;

  const [innerValue, setInnerValue] = useState(value);
  const [editing, setEditing] = useState(false);
  const escaping = useRef(false);

  const ourRef = createRef<HTMLInputElement>();
  const inputRef = ref ?? ourRef;

  function handleBlur(): void {
    if (!escaping.current && value !== innerValue) {
      onCommit?.(innerValue);
      escaping.current = false;
    }
    setEditing(false);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = event.currentTarget.value;
    setInnerValue(newValue);
  }

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === KEY.Enter) {
      event.preventDefault();
      event.currentTarget.blur();
      return;
    }

    if (isEscape(event.key)) {
      event.preventDefault();
      escaping.current = true;
      event.currentTarget.blur();
      return;
    }
  }

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  useEffect(() => {
    if (!editing && value !== innerValue) {
      setInnerValue(value);
    }
  }, [editing, value]);

  return (
    <Box
      className={classes([
        'Button',
        'Button__content',
        fluid && 'Button--fluid',
        disabled && 'Button--disabled',
        `Button--color--${color}`,
      ])}
      onClick={() => {
        if (!disabled) {
          setEditing(true);
        }
      }}
      {...rest}
    >
      {icon && <Icon name={icon} rotation={iconRotation} spin={iconSpin} />}
      {buttonText ?? innerValue}
      <input
        className="NumberInput__input"
        disabled={!!disabled}
        maxLength={maxLength}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        ref={inputRef}
        spellCheck="false"
        style={{
          display: !editing ? 'none' : '',
          textAlign: 'left',
        }}
        type="text"
        value={innerValue}
      />
    </Box>
  );
}

type FileProps = {
  accept: string;
  multiple?: boolean;
  onSelectFiles: (files: string | string[]) => void;
} & Props;

function ButtonFile(props: FileProps) {
  const { accept, multiple, onSelectFiles, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  async function read(files: FileList): Promise<string[]> {
    const promises = Array.from(files).map((file) => {
      const reader = new FileReader();

      return new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsText(file);
      });
    });

    return await Promise.all(promises);
  }

  async function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> {
    const files = event.target.files;
    if (files?.length) {
      const readFiles = await read(files);
      onSelectFiles(multiple ? readFiles : readFiles[0]);
    }
  }

  return (
    <>
      <Button onClick={() => inputRef.current?.click()} {...rest} />
      <input
        accept={accept}
        hidden
        multiple={multiple}
        onChange={handleChange}
        ref={inputRef}
        type="file"
      />
    </>
  );
}

/**
 * ## Button
 *
 * Buttons allow users to take actions, and make choices, with a single click.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-button--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export namespace Button {
  /**
   * ## Button.Checkbox
   * A ghetto checkbox, made entirely using existing Button API.
   */
  export const Checkbox = ButtonCheckbox;
  /**
   * ## Button.Confirm
   * A button with an extra confirmation step, using native button component.
   */
  export const Confirm = ButtonConfirm;
  /**
   * ## Button.Input
   * A button that turns into an input box after the first click.
   *
   * Turns back into a button after the user hits enter, defocuses, or hits escape. Enter and defocus commit, while escape cancels.
   */
  export const Input = ButtonInput;
  /**
   * ## Button.File
   * Accepts file input, based on the native element.
   */
  export const File = ButtonFile;
}
