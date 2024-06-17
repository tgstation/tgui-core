/**
 * @file
 * @copyright 2021 Aleksej Komarov
 * @license MIT
 */
import styles from '../styles/components/Stack.module.scss';

import { classes } from '../common/react';
import { RefObject } from 'react';

import {
  computeFlexClassName,
  computeFlexItemProps,
  computeFlexProps,
  FlexItemProps,
  FlexProps,
} from './Flex';
import { computeBoxClassName } from './Box';

type Props = Partial<{
  /** Fills available space. */
  fill: boolean;
  /** Reverses the stack. */
  reverse: boolean;
  /** Flex column */
  vertical: boolean;
  /** Adds zebra striping to the stack. */
  zebra: boolean;
}> &
  FlexProps;

export function Stack(props: Props) {
  const { className, vertical, fill, reverse, zebra, ...rest } = props;

  const directionPrefix = vertical ? 'column' : 'row';
  const directionSuffix = reverse ? '-reverse' : '';

  return (
    <div
      className={classes([
        fill && styles.fill,
        vertical ? styles.vertical : styles.horizontal,
        zebra && styles.zebra,
        reverse && styles[`reverse${vertical ? '__vertical' : ''}`],
        className,
        computeFlexClassName(props),
      ])}
      {...computeFlexProps({
        direction: `${directionPrefix}${directionSuffix}`,
        ...rest,
      })}
    />
  );
}

type StackItemProps = FlexItemProps &
  Partial<{
    innerRef: RefObject<HTMLDivElement>;
  }>;

function StackItem(props: StackItemProps) {
  const { className, innerRef, ...rest } = props;

  return (
    <div
      className={classes([styles.item, className, computeBoxClassName(rest)])}
      ref={innerRef}
      {...computeFlexItemProps(rest)}
    />
  );
}

Stack.Item = StackItem;

type StackDividerProps = FlexItemProps &
  Partial<{
    hidden: boolean;
  }>;

function StackDivider(props: StackDividerProps) {
  const { className, hidden, ...rest } = props;

  return (
    <div
      className={classes([
        styles.item,
        styles.divider,
        hidden && styles.divider__hidden,
        className,
        computeBoxClassName(rest),
      ])}
      {...computeFlexItemProps(rest)}
    />
  );
}

Stack.Divider = StackDivider;
