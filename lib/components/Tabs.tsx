/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
import styles from '../styles/components/Tabs.module.scss';

import { canRender, classes } from '../common/react';
import { PropsWithChildren, ReactNode } from 'react';

import { BoxProps, computeBoxClassName, computeBoxProps } from './Box';
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
  leftSlot: ReactNode;
  onClick: (e?) => void;
  rightSlot: ReactNode;
  selected: boolean;
}> &
  BoxProps &
  PropsWithChildren;

export const Tabs = (props: Props) => {
  const { className, vertical, fill, fluid, children, ...rest } = props;

  return (
    <div
      className={classes([
        styles.tabs,
        vertical ? styles.vertical : styles.horizontal,
        fill && styles.fill,
        fluid && styles.fluid,
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {children}
    </div>
  );
};

const Tab = (props: TabProps) => {
  const {
    className,
    selected,
    color,
    icon,
    leftSlot,
    rightSlot,
    children,
    ...rest
  } = props;

  return (
    <div
      className={classes([
        styles.tab,
        styles.tabs__tab,
        styles['color__' + color],
        selected && styles.selected,
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {(canRender(leftSlot) && (
        <div className={styles.tab__left}>{leftSlot}</div>
      )) ||
        (!!icon && (
          <div className={styles.tab__left}>
            <Icon name={icon} />
          </div>
        ))}
      <div className={styles.tab__text}>{children}</div>
      {canRender(rightSlot) && (
        <div className={styles.tab__right}>{rightSlot}</div>
      )}
    </div>
  );
};

Tabs.Tab = Tab;
