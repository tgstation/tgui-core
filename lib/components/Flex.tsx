import { CSSProperties } from 'react';

import { classes } from '../common/react';
import styles from '../styles/components/Flex.module.scss';
import { BoxProps, computeBoxClassName, computeBoxProps, unit } from './Box';

export type FlexProps = Partial<{
  align: string | boolean;
  direction: string;
  inline: boolean;
  justify: string;
  scrollable: boolean;
  style: CSSProperties;
  wrap: string | boolean;
}> &
  BoxProps;

export function computeFlexClassName(props: FlexProps) {
  return classes([
    styles.flex,
    props.inline && styles.inline,
    computeBoxClassName(props),
  ]);
}

export function computeFlexProps(props: FlexProps) {
  const { direction, wrap, align, justify, ...rest } = props;

  return computeBoxProps({
    style: {
      ...rest.style,
      flexDirection: direction,
      flexWrap: wrap === true ? 'wrap' : wrap,
      alignItems: align,
      justifyContent: justify,
    },
    ...rest,
  });
}

export function Flex(props) {
  const { className, ...rest } = props;
  return (
    <div
      className={classes([className, computeFlexClassName(rest)])}
      {...computeFlexProps(rest)}
    />
  );
}

export type FlexItemProps = BoxProps &
  Partial<{
    align: string | boolean;
    basis: string | number;
    grow: number | boolean;
    order: number;
    shrink: number | boolean;
    style: Partial<HTMLDivElement['style']>;
  }>;

export function computeFlexItemProps(props: FlexItemProps) {
  const { style, grow, order, shrink, basis, align, ...rest } = props;

  const computedBasis =
    basis ??
    // IE11: Set basis to specified width if it's known, which fixes certain
    // bugs when rendering tables inside the flex.
    props.width ??
    // If grow is used, basis should be set to 0 to be consistent with
    // flex css shorthand `flex: 1`.
    (grow !== undefined ? 0 : undefined);

  return computeBoxProps({
    style: {
      ...style,
      flexGrow: grow !== undefined && Number(grow),
      flexShrink: shrink !== undefined && Number(shrink),
      flexBasis: unit(computedBasis),
      order: order,
      alignSelf: align,
    },
    ...rest,
  });
}

function FlexItem(props) {
  const { className, ...rest } = props;
  return (
    <div
      className={classes([className, computeBoxClassName(props)])}
      {...computeFlexItemProps(rest)}
    />
  );
}

Flex.Item = FlexItem;
