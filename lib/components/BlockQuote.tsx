import { classes } from '../common/react';
import { Box, type BoxProps } from './Box';

export function BlockQuote(props: BoxProps) {
  const { className, ...rest } = props;

  return <Box className={classes(['BlockQuote', className])} {...rest} />;
}
