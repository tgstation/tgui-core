import {
  FloatingPortal,
  type Placement,
  flip,
  offset,
  useClick,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import { type ReactNode, useState } from 'react';

type Props = {
  /** Interacting with this element will open the Floating element. */
  children: ReactNode;
  /** The content to display like FLoating. */
  content: ReactNode;
  /** Whether the Floating element is open. */
  isOpen: boolean;
  /**
   * Open Floating element with hovering of reference element.
   */
  hoverOpen: boolean;
} & Partial<{
  /**
   * Base z-index of the Floating element
   * @default 5
   */
  baseZIndex: number;
  /** Where to place the tooltip relative to the reference element */
  placement: Placement;
}>;

/**
 * ## FLoating
 *  Floating lets you position elements so that they don't go out of the bounds of the window.
 * - [Documentation](https://floating-ui.com/docs/react) for more information.
 */
export function Floating(props: Props) {
  const { children, content, isOpen, hoverOpen, placement } = props;
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen || open,
    onOpenChange: setOpen,
    placement: placement || 'bottom',
    middleware: [
      offset(6),
      flip({
        fallbackPlacements: [
          'bottom-end',
          'bottom-start',
          'top',
          'top-end',
          'top-start',
        ],
      }),
    ],
  });

  const openMethod = hoverOpen ? useHover(context) : useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([openMethod]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex: props.baseZIndex || 5 }}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
