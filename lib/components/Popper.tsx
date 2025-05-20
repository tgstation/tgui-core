import type { Placement } from '@floating-ui/react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import type { PropsWithChildren, ReactNode } from 'react';

type Props = {
  /** The content to display in the popper */
  content: ReactNode;
  /** Whether the popper is open */
  isOpen: boolean;
} & Partial<{
  /**
   * Base z-index of the popper div
   * @default 5
   */
  baseZIndex: number;
  /** Called when the user clicks outside the popper */
  onClickOutside: () => void;
  /** Where to place the popper relative to the reference element */
  placement: Placement;
}> &
  PropsWithChildren;

/**
 * ## Popper
 *
 * Popper lets you position elements so that they don't go out of the bounds of the window.
 *
 * @deprecated - Use
 * [Floating](https://github.com/tgstation/tgui-core/tree/main/lib/components/Floating.tsx)
 * instead.
 *
 * This will serve as a wrapper for floating ui until replaced.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-popper--docs)
 */
export function Popper(props: Props) {
  const {
    baseZIndex = 5,
    children,
    content,
    isOpen,
    onClickOutside,
    placement,
  } = props;

  const { refs, floatingStyles, context } = useFloating({
    middleware: [offset(5), flip(), shift()],
    onOpenChange: onClickOutside,
    open: isOpen,
    placement,
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, zIndex: baseZIndex }}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
}
