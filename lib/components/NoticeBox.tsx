import { classes } from '@common/react';
import { Box, type BoxProps } from './Box';

type Props = ExclusiveProps & BoxProps;

/** You MUST use only one or none */
type NoticeType = 'info' | 'success' | 'danger';

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
  | (Omit<None, 'danger'> & {
      /** Red notice */
      danger: boolean;
    });

/**
 * ## NoticeBox
 *
 * A notice box which warns you about something very important.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-noticebox--docs)
 */
export function NoticeBox(props: Props) {
  const { className, color, info, success, danger, ...rest } = props;

  return (
    <Box
      className={classes([
        'NoticeBox',
        color && `NoticeBox--color--${color}`,
        info && 'NoticeBox--type--info',
        success && 'NoticeBox--type--success',
        danger && 'NoticeBox--type--danger',
        className,
      ])}
      {...rest}
    />
  );
}
