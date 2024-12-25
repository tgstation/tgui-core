import { classes } from '../common/react';
import { computeBoxClassName, computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';
import { Dimmer } from './Dimmer';

/**
 * ## Modal
 * A modal window. Uses a [Dimmer](https://github.com/tgstation/tgui-core/tree/main/lib/components/Dimmer.tsx)
 * under the hood, and dynamically adjusts its own size to fit the content you're trying to display.
 *
 * Must be a direct child of a layout component (e.g. `Window`).
 */
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
