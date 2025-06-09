import { classes } from '@common/react';
import { type ReactNode, useRef } from 'react';
import { Box, type BoxProps } from './Box';
import { Floating } from './Floating';
import { Icon } from './Icon';

type MenuBarDropdownProps = {
  disabled?: boolean;
  display: any;
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
    display,
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
            'MenuBar__font',
            'MenuBar__hover',
            className,
          ])}
          {...rest}
          onClick={disabled ? () => null : onClick}
          onMouseOver={onMouseOver}
        >
          <span className="MenuBar__MenuBarButton-text">{display}</span>
        </Box>
      </div>
    </Floating>
  );
}

type MenuBarItemProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  display: ReactNode;
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
    display,
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
      display={display}
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

function MenuItemToggle(props) {
  const { value, displayText, onClick, checked } = props;
  return (
    <Box
      className={classes([
        'MenuBar__font',
        'MenuBar__MenuItem',
        'MenuBar__MenuItemToggle',
        'MenuBar__hover',
      ])}
      onClick={() => onClick(value)}
    >
      <div className="MenuBar__MenuItemToggle__check">
        <Icon name={checked ? 'check' : ''} size={1.3} />
      </div>
      {displayText}
    </Box>
  );
}

MenuDropdown.MenuItemToggle = MenuItemToggle;

type MenuItemProps = Partial<{
  value: any;
  displayText: string;
  onClick: (value: any) => void;
}>;

function MenuItem(props: MenuItemProps) {
  const { value, displayText, onClick } = props;
  return (
    <Box
      className={classes([
        'MenuBar__font',
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
