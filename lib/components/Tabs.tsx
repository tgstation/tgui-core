import type { PropsWithChildren, ReactNode } from 'react';
import { canRender, classes } from '../common/react';
import { type BoxProps, computeBoxClassName, computeBoxProps } from './Box';
import { Icon } from './Icon';

type Props = Partial<{
  className: string;
  fill: boolean;
  fluid: boolean;
  vertical: boolean;
}> &
  BoxProps &
  PropsWithChildren;

type TabProps = Partial<{
  className: string;
  color: string;
  icon: string;
  iconSpin: boolean;
  leftSlot: ReactNode;
  onClick: (e?) => void;
  rightSlot: ReactNode;
  selected: boolean;
}> &
  BoxProps &
  PropsWithChildren;

export function Tabs(props: Props) {
  const { className, vertical, fill, fluid, children, ...rest } = props;

  return (
    <div
      className={classes([
        'Tabs',
        vertical ? 'Tabs--vertical' : 'Tabs--horizontal',
        fill && 'Tabs--fill',
        fluid && 'Tabs--fluid',
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {children}
    </div>
  );
}

function Tab(props: TabProps) {
  const {
    className,
    selected,
    color,
    icon,
    iconSpin,
    leftSlot,
    rightSlot,
    children,
    onClick,
    ...rest
  } = props;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      e.target.blur();
    }
  };

  return (
    <div
      className={classes([
        'Tab',
        'Tabs__Tab',
        `Tab--color--${color}`,
        selected && 'Tab--selected',
        className,
        computeBoxClassName(rest),
      ])}
      onClick={handleClick}
      {...computeBoxProps(rest)}
    >
      {(canRender(leftSlot) && <div className="Tab__left">{leftSlot}</div>) ||
        (!!icon && (
          <div className="Tab__left">
            <Icon name={icon} spin={iconSpin} />
          </div>
        ))}
      <div className="Tab__text">{children}</div>
      {canRender(rightSlot) && <div className="Tab__right">{rightSlot}</div>}
    </div>
  );
}

Tabs.Tab = Tab;
