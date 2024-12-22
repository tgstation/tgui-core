import { classes } from '../common/react';
import { computeBoxClassName, computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';
import { Dimmer } from './Dimmer';

export function Modal(props: BoxProps) {
  const { className, children, ...rest } = props;

  return (
    <Dimmer>
      <div
        className={classes(['Modal', className, computeBoxClassName(rest)])}
        {...computeBoxProps(rest)}
      >
        {children}
      </div>
    </Dimmer>
  );
}
