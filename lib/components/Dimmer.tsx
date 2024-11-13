import { classes } from '../common/react';

import { Box, type BoxProps } from './Box';

export function Dimmer(props: BoxProps) {
  const { className, children, ...rest } = props;

  return (
    <Box className={classes(['Dimmer', className])} {...rest}>
      <div className="Dimmer__inner">{children}</div>
    </Box>
  );
}
