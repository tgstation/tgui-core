import { type ReactNode, useEffect, useRef, useState } from 'react';
import { KEY } from '../common/keys';
import { classes } from '../common/react';
import { unit } from '../common/ui';
import type { BoxProps } from './Box';
import { Button } from './Button';
import { Floating } from './Floating';
import { Icon } from './Icon';

type DropdownEntry = {
  displayText: ReactNode;
  value: string | number;
};

type DropdownOption = string | DropdownEntry;

type Props = {
  /** Called when a value is picked from the list, `value` is the value that was picked */
  onSelected: (value: any) => void;
  /** An array of strings which will be displayed in the
  dropdown when open. See Dropdown.tsx for more advanced usage with DropdownEntry */
  options: DropdownOption[];
  /** Currently selected entry to display. Can be left stateless to permanently display this value. */
  selected: DropdownOption | null | undefined;
} & Partial<{
  /** Whether to scroll automatically on open. Defaults to true */
  autoScroll: boolean;
  /** Whether to display previous / next buttons */
  buttons: boolean;
  /** Whether to clip the selected text */
  clipSelectedText: boolean;
  /** Color of dropdown button */
  color: string;
  /** Disables the dropdown */
  disabled: boolean;
  /** Overwrites selection text with this. Good for objects etc. */
  displayText: ReactNode;
  /** Icon to display in dropdown button */
  icon: string;
  /** Angle of the icon */
  iconRotation: number;
  /** Whether or not the icon should spin */
  iconSpin: boolean;
  /** Width of the dropdown menu. Default: 15rem */
  menuWidth: number;
  /** Whether or not the arrow on the right hand side of the dropdown button is visible */
  noChevron: boolean;
  /** Called when dropdown button is clicked */
  onClick: (event) => void;
  /** Dropdown renders over instead of below */
  over: boolean;
  /** Text to show when nothing has been selected. */
  placeholder: string;
}> &
  BoxProps;

enum DIRECTION {
  Current = 'current',
  Next = 'next',
  Previous = 'previous',
}

const NONE = -1;

function getOptionValue(option: DropdownOption) {
  return typeof option === 'string' ? option : option.value;
}

/**
 * ## Dropdown
 * A simple dropdown box component. Lets the user select from a list of options
 * and displays selected entry.
 */
export function Dropdown(props: Props) {
  const {
    autoScroll = true,
    buttons,
    className,
    clipSelectedText = true,
    color = 'default',
    disabled,
    displayText,
    icon,
    iconRotation,
    iconSpin,
    menuWidth,
    noChevron,
    onClick,
    onSelected,
    options = [],
    over,
    placeholder = 'Select...',
    selected,
    width = 15,
  } = props;

  const [open, setOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  const selectedIndex =
    options.findIndex((option) => getOptionValue(option) === selected) || 0;

  function scrollToElement(position: number) {
    let scrollPos = position;
    if (position < selectedIndex) {
      scrollPos = position < 2 ? 0 : position - 2;
    } else {
      scrollPos =
        position > options.length - 3 ? options.length - 1 : position - 2;
    }

    const dropdownMenu = innerRef.current;
    const element = dropdownMenu?.children[scrollPos] as HTMLElement;

    if (dropdownMenu && element) {
      dropdownMenu.scrollTop = element.offsetTop;
    }
  }

  /** Update the selected value when clicking the left/right buttons */
  function updateSelected(direction: DIRECTION) {
    if (options.length < 1 || disabled) {
      return;
    }

    const startIndex = 0;
    const endIndex = options.length - 1;

    let newIndex: number;
    if (selectedIndex < 0) {
      newIndex = direction === 'next' ? endIndex : startIndex; // No selection yet
    } else if (direction === 'next') {
      newIndex = selectedIndex === endIndex ? startIndex : selectedIndex + 1; // Move to next option
    } else {
      newIndex = selectedIndex === startIndex ? endIndex : selectedIndex - 1; // Move to previous option
    }

    if (open && autoScroll) {
      scrollToElement(newIndex);
    }
    onSelected?.(getOptionValue(options[newIndex]));
  }

  /** Allows the menu to be scrollable on open */
  useEffect(() => {
    if (open && autoScroll && selectedIndex !== NONE) {
      /**
       * Floating uses async FloatingPortal,
       * the dropdown content is not yet ready when you open it.
       */
      requestAnimationFrame(() => {
        scrollToElement(selectedIndex);
      });
    }
  }, [open]);

  return (
    <div className="Dropdown">
      <Floating
        childrenNoWrap
        contentAutoWidth
        closeAfterInteract
        placement={over ? 'top' : 'bottom'}
        allowedOutsideClasses=".Dropdown__button"
        contentClasses="Dropdown__menu--wrapper"
        contentStyles={{ maxWidth: unit(menuWidth) }}
        disabled={disabled}
        onOpenChange={setOpen}
        content={
          <div ref={innerRef} className="Dropdown__menu">
            {options.length === 0 ? (
              <div className="Dropdown__menu--entry">No options</div>
            ) : (
              options.map((option) => {
                const value = getOptionValue(option);
                return (
                  <div
                    className={classes([
                      'Dropdown__menu--entry',
                      selected === value && 'selected',
                    ])}
                    key={value}
                    onClick={() => {
                      onSelected?.(value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === KEY.Enter) {
                        onSelected?.(value);
                      }
                    }}
                  >
                    {typeof option === 'string' ? option : option.displayText}
                  </div>
                );
              })
            )}
          </div>
        }
      >
        <div
          className={classes([
            'Dropdown__control',
            'Button',
            'Button--dropdown',
            `Button--color--${color}`,
            disabled && 'Button--disabled',
            className,
          ])}
          style={{ width: unit(width) }}
          onClick={(event) => {
            if (disabled && !open) {
              return;
            }
            onClick?.(event);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !disabled) {
              onClick?.(event);
            }
          }}
        >
          {icon && (
            <Icon mr={1} name={icon} rotation={iconRotation} spin={iconSpin} />
          )}
          <span
            className="Dropdown__selected-text"
            style={{
              overflow: clipSelectedText ? 'hidden' : 'visible',
            }}
          >
            {displayText ||
              (selected && getOptionValue(selected)) ||
              placeholder}
          </span>
          {!noChevron && (
            <Icon
              className={classes([
                'Dropdown__arrow--button',
                over && 'over',
                open && 'open',
              ])}
              name={'chevron-down'}
            />
          )}
        </div>
      </Floating>
      {buttons && (
        <>
          <Button
            className="Dropdown__button"
            disabled={disabled}
            icon="chevron-left"
            onClick={() => {
              updateSelected(DIRECTION.Previous);
            }}
          />

          <Button
            className="Dropdown__button"
            disabled={disabled}
            icon="chevron-right"
            onClick={() => {
              updateSelected(DIRECTION.Next);
            }}
          />
        </>
      )}
    </div>
  );
}
