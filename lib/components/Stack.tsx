import type { RefObject } from 'react';
import { classes } from '../common/react';
import { computeBoxClassName } from './Box';
import {
  type FlexItemProps,
  type FlexProps,
  computeFlexClassName,
  computeFlexItemProps,
  computeFlexProps,
} from './Flex';

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
        'Stack',
        fill && 'Stack--fill',
        vertical ? 'Stack--vertical' : 'Stack--horizontal',
        zebra && 'Stack--zebra',
        reverse && `Stack--reverse${vertical ? '--vertical' : ''}`,
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
      className={classes(['Stack__item', className, computeBoxClassName(rest)])}
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
        'Stack__item',
        'Stack__divider',
        hidden && 'Stack__divider--hidden',
        className,
        computeBoxClassName(rest),
      ])}
      {...computeFlexItemProps(rest)}
    />
  );
}

Stack.Divider = StackDivider;
