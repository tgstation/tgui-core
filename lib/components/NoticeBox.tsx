/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
import styles from '../styles/components/NoticeBox.module.scss';
import { classes } from '../common/react';

import { Box, BoxProps } from './Box';

type Props = ExclusiveProps & BoxProps;

/** You MUST use only one or none */
type NoticeType = 'info' | 'success' | 'danger';

type None = {
  [K in NoticeType]?: undefined;
};

type ExclusiveProps =
  | None
  | (Omit<None, 'info'> & {
      info: boolean;
    })
  | (Omit<None, 'success'> & {
      success: boolean;
    })
  | (Omit<None, 'danger'> & {
      danger: boolean;
    });

export function NoticeBox(props: Props) {
  const { className, color, info, success, danger, ...rest } = props;

  return (
    <Box
      className={classes([
        styles.noticeBox,
        color && styles['color__' + color],
        info && styles.info,
        success && styles.success,
        danger && styles.danger,
        className,
      ])}
      {...rest}
    />
  );
}
