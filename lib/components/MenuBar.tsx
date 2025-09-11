import { type BooleanLike, classes } from '@common/react';
import {
  type PropsWithChildren,
  type ReactNode,
  useRef,
  useState,
} from 'react';
import { Box, type BoxProps } from './Box';
import { Floating } from './Floating';
import { Icon } from './Icon';

type MenuBarDropdownProps = {
  disabled?: boolean;
  displayText: any;
  onMouseOver: () => void;
  onOutsideClick: () => void;
  open: boolean;
  openWidth: string;
} & BoxProps;

function MenuBarButton(props: MenuBarDropdownProps) {
  const {
    children,
    className,
    disabled,
    displayText,
    onClick,
    onMouseOver,
    open,
    openWidth,
    onOutsideClick,
    ...rest
  } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <Floating
      allowedOutsideClasses=".Menubar_inner"
      content={
        <div
          className="MenuBar__menu"
          style={{
            width: openWidth,
          }}
        >
          {children}
        </div>
      }
    >
      <div className="Menubar_inner" ref={menuRef}>
        <Box
          className={classes([
            'MenuBar__MenuBarButton',
            disabled && 'MenuBar__disabled',
            'MenuBar__font',
            'MenuBar__hover',
            className,
          ])}
          {...rest}
          onClick={disabled ? () => null : onClick}
          onMouseOver={onMouseOver}
        >
          <span className="MenuBar__MenuBarButton-text">{displayText}</span>
        </Box>
      </div>
    </Floating>
  );
}

type MenuBarItemProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  displayText: ReactNode;
  entry: string;
  openMenuBar: string | null;
  openOnHover: boolean;
  openWidth: string;
  setOpenMenuBar: (entry: string | null) => void;
  setOpenOnHover: (flag: boolean) => void;
};

function MenuDropdown(props: MenuBarItemProps) {
  const {
    entry,
    children,
    openWidth,
    displayText,
    setOpenMenuBar,
    openMenuBar,
    setOpenOnHover,
    openOnHover,
    disabled,
    className,
  } = props;

  return (
    <MenuBarButton
      className={className}
      disabled={disabled}
      displayText={displayText}
      onClick={() => {
        const open = openMenuBar === entry ? null : entry;
        setOpenMenuBar(open);
        setOpenOnHover(!openOnHover);
      }}
      onMouseOver={() => {
        if (openOnHover) {
          setOpenMenuBar(entry);
        }
      }}
      onOutsideClick={() => {
        setOpenMenuBar(null);
        setOpenOnHover(false);
      }}
      open={openMenuBar === entry}
      openWidth={openWidth}
    >
      {children}
    </MenuBarButton>
  );
}

MenuBar.Dropdown = MenuDropdown;

type MenuItemProps = Partial<{
  value: any;
  displayText: ReactNode;
  disabled: BooleanLike;
  onClick: (value: any) => void;
}>;

function MenuItem(props: MenuItemProps) {
  const { value, disabled, displayText, onClick } = props;

  return (
    <Box
      className={classes([
        'MenuBar__font',
        disabled && 'MenuBar__disabled',
        'MenuBar__MenuItem',
        'MenuBar__hover',
      ])}
      onClick={() => onClick?.(value)}
    >
      {displayText}
    </Box>
  );
}

MenuDropdown.MenuItem = MenuItem;

type MenuItemToggleProps = MenuItemProps & Partial<{ checked: BooleanLike }>;

function MenuItemToggle(props: MenuItemToggleProps) {
  const { value, disabled, displayText, onClick, checked } = props;

  return (
    <Box
      className={classes([
        'MenuBar__font',
        disabled && 'MenuBar__disabled',
        'MenuBar__MenuItem',
        'MenuBar__MenuItemToggle',
        'MenuBar__hover',
      ])}
      onClick={() => onClick?.(value)}
    >
      <div className="MenuBar__MenuItemToggle__check">
        <Icon name={checked ? 'check' : ''} size={1.3} />
      </div>
      {displayText}
    </Box>
  );
}

MenuDropdown.MenuItemToggle = MenuItemToggle;

type MenuItemSubmenuProps = PropsWithChildren<
  Omit<MenuItemProps, 'value' | 'onClick'> & Partial<{ openWidth: string }>
>;

function MenuItemSubmenu(props: MenuItemSubmenuProps) {
  const { displayText, disabled, openWidth, children } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Floating
      hoverOpen
      hoverDelay={250}
      hoverSafePolygon
      contentOffset={0}
      disabled={disabled}
      placement="right-start"
      onOpenChange={setOpen}
      content={
        <div
          className="MenuBar__menu"
          style={{
            width: openWidth,
          }}
        >
          {children}
        </div>
      }
    >
      <Box
        className={classes([
          'MenuBar__font',
          disabled && 'MenuBar__disabled',
          'MenuBar__MenuItem',
          'MenuBar__MenuItemSubmenu',
          open && 'MenuBar__MenuItemSubmenu__Open',
          'MenuBar__hover',
        ])}
      >
        {displayText}
        <Icon name="chevron-right" />
      </Box>
    </Floating>
  );
}

MenuDropdown.Submenu = MenuItemSubmenu;

function Separator() {
  return <div className="MenuBar__Separator" />;
}

MenuDropdown.Separator = Separator;

type MenuBarProps = {
  children: ReactNode;
};

export function MenuBar(props: MenuBarProps) {
  const { children } = props;

  return <Box className="MenuBar">{children}</Box>;
}
