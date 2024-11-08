/**
 * @file
 * @copyright 2022 Aleksej Komarov
 * @license MIT
 */
import { Component, type ReactNode, type RefObject, createRef } from 'react';

import { classes } from '../common/react';
import styles from '../styles/components/MenuBar.module.scss';
import { Box } from './Box';
import { Icon } from './Icon';

type MenuProps = {
  children: any;
  menuRef: RefObject<HTMLElement>;
  onOutsideClick: () => void;
  width: string;
};

class Menu extends Component<MenuProps> {
  private readonly handleClick: (event) => void;

  constructor(props) {
    super(props);
    this.handleClick = (event) => {
      if (!this.props.menuRef.current) {
        return;
      }

      if (!this.props.menuRef.current.contains(event.target)) {
        this.props.onOutsideClick();
      }
    };
  }

  componentWillMount() {
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  render() {
    const { width, children } = this.props;
    return (
      <div
        className={styles.menu}
        style={{
          width: width,
        }}
      >
        {children}
      </div>
    );
  }
}

type MenuBarDropdownProps = {
  children: any;
  className?: string;
  disabled?: boolean;
  display: any;
  onClick: () => void;
  onMouseOver: () => void;
  onOutsideClick: () => void;
  open: boolean;
  openWidth: string;
};

class MenuBarButton extends Component<MenuBarDropdownProps> {
  private readonly menuRef: RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.menuRef = createRef();
  }

  render() {
    const { props } = this;
    const {
      open,
      openWidth,
      children,
      disabled,
      display,
      onMouseOver,
      onClick,
      onOutsideClick,
      ...boxProps
    } = props;
    const { className, ...rest } = boxProps;

    return (
      <div ref={this.menuRef}>
        <Box
          className={classes([
            styles.button,
            styles.font,
            styles.hover,
            className,
          ])}
          {...rest}
          onClick={disabled ? () => null : onClick}
          onMouseOver={onMouseOver}
        >
          <span className={styles.button__text}>{display}</span>
        </Box>
        {open && (
          <Menu
            width={openWidth}
            menuRef={this.menuRef}
            onOutsideClick={onOutsideClick}
          >
            {children}
          </Menu>
        )}
      </div>
    );
  }
}

type MenuBarItemProps = {
  children: any;
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

export function Dropdown(props: MenuBarItemProps) {
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
      openWidth={openWidth}
      display={display}
      disabled={disabled}
      open={openMenuBar === entry}
      className={className}
      onClick={() => {
        const open = openMenuBar === entry ? null : entry;
        setOpenMenuBar(open);
        setOpenOnHover(!openOnHover);
      }}
      onOutsideClick={() => {
        setOpenMenuBar(null);
        setOpenOnHover(false);
      }}
      onMouseOver={() => {
        if (openOnHover) {
          setOpenMenuBar(entry);
        }
      }}
    >
      {children}
    </MenuBarButton>
  );
}

function MenuItemToggle(props) {
  const { value, displayText, onClick, checked } = props;
  return (
    <Box
      className={classes([
        styles.font,
        styles.item,
        styles.toggle,
        styles.hover,
      ])}
      onClick={() => onClick(value)}
    >
      <div className={styles.toggle__check}>
        {checked && <Icon size={1.3} name="check" />}
      </div>
      {displayText}
    </Box>
  );
}

Dropdown.MenuItemToggle = MenuItemToggle;

function MenuItem(props) {
  const { value, displayText, onClick } = props;
  return (
    <Box
      className={classes([styles.font, styles.item, styles.hover])}
      onClick={() => onClick(value)}
    >
      {displayText}
    </Box>
  );
}

Dropdown.MenuItem = MenuItem;

function Separator() {
  return <div className={styles.separator} />;
}

Dropdown.Separator = Separator;

type MenuBarProps = {
  children: any;
};

export function MenuBar(props: MenuBarProps) {
  const { children } = props;
  return <Box className={styles.menuBar}>{children}</Box>;
}

MenuBar.Dropdown = Dropdown;
