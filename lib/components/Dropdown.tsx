import { KEY } from '@common/keys';
import { classes } from '@common/react';
import { unit } from '@common/ui';
import type { Placement } from '@floating-ui/react';
import { type ReactNode, useRef, useState } from 'react';
import type { BoxProps } from './Box';
import { Button } from './Button';
import { Floating } from './Floating';
import { Icon } from './Icon';
import { Input } from './Input';

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
  /** Color of dropdown button */
  color: string;
  /** Disables the dropdown */
  disabled: boolean;
  /** Overwrites selection text with this. Good for objects etc. */
  displayText: ReactNode;
  /** Icon to display in dropdown button */
  icon: string;
  /** Whether the icon should be displayed alone */
  iconOnly: boolean;
  /** Angle of the icon */
  iconRotation: number;
  /** Whether or not the icon should spin */
  iconSpin: boolean;
  /** Whether we want to make the search input styled like a regular dropdown button. */
  styledInput: boolean;
  /** Maximum number of items to display before having to scroll */
  maxItems: number;
  /** Width of the dropdown menu in box units. Default: 15 */
  menuWidth: string | number;
  /** Whether or not the arrow on the right hand side of the dropdown button is visible */
  noChevron: boolean;
  /** Dropdown renders over instead of below */
  over: boolean;
  /** Fill all available horizontal space  */
  fluid: boolean;
  /** Text to show when nothing has been selected. */
  placeholder: string;
  /** Turns the dropdown button into a search textbox. Incompatible with Tiny */
  searchInput: boolean;
  /** @deprecated If you want to allow dropdown breaks layout, set width 100% */
  clipSelectedText: boolean;
  /** Called when dropdown button is clicked */
  onClick: (event) => void;
}> &
  BoxProps;

enum DIRECTION {
  Current = 'current',
  Next = 'next',
  Previous = 'previous',
}

const NONE = -1;

/** Minimum number of items to display — if it's less than 3 items then a dropdown is probably not what you should be using */
const MIN_ITEMS = 3;
/** Each entry: line-height 1.333em (~16px) + space-xs padding top+bottom (~4px) = ~20px
 *  unit() multiplies by 12px, so each item is ~1.7 units */
const ITEM_HEIGHT_UNITS = 1.7;
/** Capped at 25 for sanity — the default CSS maxHeight is 10 items basically */
const MAX_ITEMS = 25;

function getOptionValue(option: DropdownOption): string | number {
  return typeof option === 'string' ? option : option.value;
}

/**
 * ## Dropdown
 *
 * A simple dropdown box component. Lets the user select from a list of options
 * and displays selected entry.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-dropdown--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function Dropdown(props: Props) {
  const {
    autoScroll = true,
    buttons,
    className,
    color = 'default',
    disabled,
    displayText,
    icon,
    iconRotation,
    iconSpin,
    iconOnly,
    styledInput,
    maxItems,
    menuWidth,
    noChevron,
    onClick,
    onSelected,
    options = [],
    over,
    placeholder = 'Select...',
    searchInput,
    selected,
    fluid,
    width = 15,
  } = props;

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [handleOpen, setHandleOpen] = useState<boolean | undefined>(undefined);
  const innerRef = useRef<HTMLDivElement>(null);
  const justSelectedRef = useRef(false);
  const enterPressedRef = useRef(false);

  const selectedIndex =
    options.findIndex((option) => getOptionValue(option) === selected) || 0;

  function scrollToElement(position: number): void {
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
  function updateSelected(direction: DIRECTION): void {
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

  const displayedOptions = searchQuery
    ? options.filter((option) =>
        (typeof option === 'string'
          ? option
          : option.displayText || getOptionValue(option)
        )
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      )
    : options;

  function handleBlur(value: string) {
    /* If the user has typed something, and they pressed enter, select the first result */
    if (
      value &&
      enterPressedRef.current &&
      !justSelectedRef.current &&
      displayedOptions.length > 0
    ) {
      onSelected?.(getOptionValue(displayedOptions[0]));
    }
    /* Otherwise clear the text input field */
    justSelectedRef.current = false;
    enterPressedRef.current = false;
    setSearchQuery('');
  }

  let placement: Placement = over ? 'top' : 'bottom';
  if (iconOnly) {
    placement = `${placement}-start` as Placement;
  }

  const menuMaxHeight = maxItems
    ? {
        maxHeight: unit(
          Math.max(Math.min(maxItems, MAX_ITEMS), MIN_ITEMS) *
            ITEM_HEIGHT_UNITS,
        ),
        overflowY: 'auto' as const,
      }
    : undefined;

  return (
    <div
      className={classes([
        'Dropdown',
        fluid && 'Dropdown--fluid',
        styledInput && `Button--color--${color}`,
      ])}
    >
      <Floating
        allowedOutsideClasses=".Dropdown__button"
        closeAfterInteract
        content={
          <div className="Dropdown__menu" ref={innerRef} style={menuMaxHeight}>
            {displayedOptions.length === 0 ? (
              <div className="Dropdown__menu--entry">No options</div>
            ) : (
              displayedOptions.map((option) => {
                const value = getOptionValue(option);
                return (
                  <div
                    className={classes([
                      'Dropdown__menu--entry',
                      selected === value && 'selected',
                    ])}
                    key={value}
                    onClick={() => {
                      justSelectedRef.current = true;
                      onSelected?.(value);
                      setSearchQuery('');
                    }}
                    onKeyDown={(event) => {
                      if (event.key === KEY.Enter) {
                        justSelectedRef.current = true;
                        onSelected?.(value);
                        setSearchQuery('');
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
        contentAutoWidth={!menuWidth}
        contentClasses="Dropdown__menu--wrapper"
        contentStyles={{ width: menuWidth ? unit(menuWidth) : undefined }}
        disabled={disabled}
        onMounted={() => {
          if (open && autoScroll && selectedIndex !== NONE) {
            /**
             * Floating uses async FloatingPortal,
             * the dropdown content is not yet ready when you open it.
             */
            scrollToElement(selectedIndex);
          }
        }}
        onOpenChange={setOpen}
        handleOpen={handleOpen}
        placement={placement}
      >
        {searchInput ? (
          <div style={{ position: 'relative', display: 'flex', flex: 1 }}>
            <Input
              className={classes([
                'Dropdown__input',
                styledInput && 'Dropdown__input--styled',
                className,
              ])}
              placeholder={displayText?.toString() || placeholder}
              disabled={disabled}
              value={searchQuery}
              alwaysUpdate
              onEnter={() => {
                enterPressedRef.current = true;
                setHandleOpen(false);
                setTimeout(() => setHandleOpen(undefined), 0);
              }}
              onChange={setSearchQuery}
              onBlur={handleBlur}
              fluid
            />
            {!noChevron && (
              <div
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              >
                <Icon
                  className={classes([
                    'Dropdown__icon',
                    'Dropdown__icon--arrow',
                    open && 'open',
                  ])}
                  name="chevron-down"
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className={classes([
              'Dropdown__control',
              `Button--color--${color}`,
              disabled && 'Button--disabled',
              iconOnly && 'Dropdown__control--icon-only',
              className,
            ])}
            onClick={(event) => {
              if (disabled && !open) {
                return;
              }
              onClick?.(event);
            }}
            onKeyDown={(event) => {
              if (event.key === KEY.Enter && !disabled) {
                onClick?.(event);
              }
            }}
            style={{ width: unit(width) }}
          >
            {icon && (
              <Icon
                className="Dropdown__icon"
                name={icon}
                rotation={iconRotation}
                spin={iconSpin}
              />
            )}
            {!iconOnly && (
              <>
                <span className="Dropdown__selected-text">
                  {displayText ||
                    (selected && getOptionValue(selected)) ||
                    placeholder}
                </span>

                {!noChevron && (
                  <Icon
                    className={classes([
                      'Dropdown__icon',
                      'Dropdown__icon--arrow',
                      over && 'over',
                      open && 'open',
                    ])}
                    name="chevron-down"
                  />
                )}
              </>
            )}
          </div>
        )}
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
