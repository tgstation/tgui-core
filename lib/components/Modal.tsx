import { isEscape, KEY } from '@common/keys';
import { classes } from '@common/react';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import type { KeyboardEvent } from 'react';
import type { BoxProps } from './Box';
import { Dimmer } from './Dimmer';

export type ModalProps = Partial<{
  /** Fires once the enter key is pressed */
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  /** Fires once the escape key is pressed */
  onEscape: (e: KeyboardEvent<HTMLInputElement>) => void;
}> &
  BoxProps;

/**
 * ## Modal
 *
 * A modal window. Uses a
 * [Dimmer](https://tgstation.github.io/tgui-core/?path=/docs/components-dimmer--docs)
 * under the hood, and dynamically adjusts its own size to fit the content
 * you're trying to display.
 *
 * Must be a direct child of a layout component (e.g. `Window`).
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-modal--docs)
 */
export function Modal(props: ModalProps) {
  const { className, children, onEnter, onEscape, ...rest } = props;

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === KEY.Enter) {
      onEnter?.(e);
    }
    if (isEscape(e.key)) {
      onEscape?.(e);
    }
  }

  return (
    <Dimmer className="Modal__dimmer" onKeyDown={handleKeyDown}>
      <div
        className={classes(['Modal', className, computeBoxClassName(rest)])}
        {...computeBoxProps(rest)}
      >
        {children}
      </div>
    </Dimmer>
  );
}
