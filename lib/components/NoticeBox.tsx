import { classes } from '../common/react';
import { Box, BoxProps } from './Box';

type Props = ExclusiveProps & BoxProps;

/** You MUST use only one or none */
type NoticeType = 'info' | 'success' | 'warning' | 'danger';

type None = {
  [K in NoticeType]?: undefined;
};

type ExclusiveProps =
  | None
  | (Omit<None, 'info'> & {
      /** Blue notice */
      info: boolean;
    })
  | (Omit<None, 'success'> & {
      /** Green notice */
      success: boolean;
    })
  | (Omit<None, 'warning'> & {
      /** Orange notice */
      warning: boolean;
    })
  | (Omit<None, 'danger'> & {
      /** Red notice */
      danger: boolean;
    });

export function NoticeBox(props: Props) {
  const { className, color, info, success, warning, danger, ...rest } = props;

  return (
    <Box
      className={classes([
        'NoticeBox',
        color && 'NoticeBox--color--' + color,
        info && 'NoticeBox--type--info',
        success && 'NoticeBox--type--success',
        danger && 'NoticeBox--type--danger',
        className,
      ])}
      {...rest}
    />
  );
}
