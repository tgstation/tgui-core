/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import styles from '../styles/components/ColorBox.module.scss';

import { classes } from '../common/react';
import { ReactNode } from 'react';

import { BoxProps, computeBoxClassName, computeBoxProps } from './Box';

type Props = {
  content?: ReactNode;
} & BoxProps;

export function ColorBox(props: Props) {
  const { content, children, className, ...rest } = props;

  rest.color = content ? null : 'default';
  rest.backgroundColor = props.color || 'default';

  return (
    <div
      className={classes([
        styles.colorBox,
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {content || '.'}
    </div>
  );
}
