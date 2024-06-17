/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import styles from '../styles/components/BlockQuote.module.scss';

import { classes } from '../common/react';

import { Box, BoxProps } from './Box';

export function BlockQuote(props: BoxProps) {
  const { className, ...rest } = props;

  return <Box className={classes([styles.blockQuote, className])} {...rest} />;
}
