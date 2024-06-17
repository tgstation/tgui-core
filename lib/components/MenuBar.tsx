/**
 * @file
 * @copyright 2022 Aleksej Komarov
 * @license MIT
 */
import styles from '../styles/components/MenuBar.module.scss';

import { classes } from '../common/react';
import { Component, createRef, ReactNode, RefObject } from 'react';

import { Box } from './Box';
import { Icon } from './Icon';

type MenuProps = {
  children: any;
  width: string;
  menuRef: RefObject<HTMLElement>;
  onOutsideClick: () => void;
};

class Menu extends Component<MenuProps> {
  private readonly handleClick: (event) => void;

  constructor(props) {
    super(props);
    this.handleClick = (event) => {
      if (!this.props.menuRef.current) {
        return;
      }

      if (this.props.menuRef.current.contains(event.target)) {
      } else {
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
  open: boolean;
  openWidth: string;
  children: any;
  disabled?: boolean;
  display: any;
  onMouseOver: () => void;
  onClick: () => void;
  onOutsideClick: () => void;
  className?: string;
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
  entry: string;
  children: any;
  openWidth: string;
  display: ReactNode;
  setOpenMenuBar: (entry: string | null) => void;
  openMenuBar: string | null;
  setOpenOnHover: (flag: boolean) => void;
  openOnHover: boolean;
  disabled?: boolean;
  className?: string;
};

export const Dropdown = (props: MenuBarItemProps) => {
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
};

const MenuItemToggle = (props) => {
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
};

Dropdown.MenuItemToggle = MenuItemToggle;

const MenuItem = (props) => {
  const { value, displayText, onClick } = props;
  return (
    <Box
      className={classes([styles.font, styles.item, styles.hover])}
      onClick={() => onClick(value)}
    >
      {displayText}
    </Box>
  );
};

Dropdown.MenuItem = MenuItem;

const Separator = () => {
  return <div className={styles.separator} />;
};

Dropdown.Separator = Separator;

type MenuBarProps = {
  children: any;
};

export const MenuBar = (props: MenuBarProps) => {
  const { children } = props;
  return <Box className={styles.menuBar}>{children}</Box>;
};

MenuBar.Dropdown = Dropdown;
