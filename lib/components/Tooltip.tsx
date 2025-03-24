import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
import { Floating } from './Floating';

type Props = {
  /** The content to display in the tooltip */
  content: ReactNode;
} & Partial<{
  /** Hovering this element will show the tooltip */
  children: ReactNode;
  /** Where to place the tooltip relative to the reference element */
  position: Placement;
}>;

/**
 * ## Tooltip
 * A boxy tooltip from tgui 1. It is very hacky in its current state, and
 * requires setting `position: relative` on the container.
 *
 * Please note that
 * [Button](https://github.com/tgstation/tgui-core/tree/main/lib/components/Button.tsx)
 * component has a `tooltip` prop and it is recommended to use that prop instead.
 *
 * Usage:
 * ```tsx
 * <Tooltip position="bottom" content="Box tooltip">
 *   <Box position="relative">Sample text.</Box>
 * </Tooltip>
 * ```
 */
export function Tooltip(props: Props) {
  const { children, content, position } = props;

  return (
    <Floating
      hoverOpen
      placement={position}
      content={content}
      contentClass="Tooltip"
    >
      {children}
    </Floating>
  );
}
