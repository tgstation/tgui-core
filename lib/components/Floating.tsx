import {
  FloatingPortal,
  type Placement,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStatus,
} from '@floating-ui/react';
import { type ReactNode, useState } from 'react';
import { classes } from '../common/react';

type Props = {
  /** Interacting with this element will open the floating element. */
  children: ReactNode;
  /** The content to display like fLoating. */
  content: ReactNode;
} & Partial<{
  /**
   * Base z-index of the floating element
   * @default 5
   */
  baseZIndex: number;
  /** Class with will be applied to the content. */
  contentClass: string;
  /**
   * Open Floating element with hovering of reference element.
   */
  hoverOpen: boolean;
  /**
   * Delay in ms before opening and closing the floating element on hover.
   * @default 200
   */
  hoverDelay: number;
  /** Disables open/close floating element animations. */
  disableAnimations: boolean;
  /** Where to place the tooltip relative to the reference element. */
  placement: Placement;
  /**
   * Called when the open state changes.
   * Returns the new open state.
   *
   * Can be used this way:
   * ```tsx
   * onOpenChange={open ? makeThingsOnOpen : makeThingsOnClose}
   * ```
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Called when the user clicks outside the floating element.
   */
  onClickOutside?: () => void;
}>;

/**
 * ## FLoating
 *  Floating lets you position elements so that they don't go out of the bounds of the window.
 * - [Documentation](https://floating-ui.com/docs/react) for more information.
 */
export function Floating(props: Props) {
  const {
    children,
    content,
    contentClass,
    hoverOpen,
    hoverDelay,
    disableAnimations,
    placement,
    onOpenChange,
    onClickOutside,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange(isOpen, _, reason) {
      setIsOpen(isOpen);
      onOpenChange?.(isOpen);
      reason === 'outside-press' && onClickOutside?.();
    },
    placement: placement || 'bottom',
    transform: false,
    middleware: [offset(6), flip()],
  });

  const dismiss = useDismiss(context);
  const openMethod = hoverOpen
    ? useHover(context, { restMs: hoverDelay || 200 })
    : useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    openMethod,
  ]);
  const { isMounted, status } = useTransitionStatus(context, {
    duration: disableAnimations ? 0 : 200,
  });

  return (
    <>
      <div
        ref={refs.setReference}
        style={{ display: 'flow-root' }}
        {...getReferenceProps({ onClick: (e) => e.stopPropagation() })}
      >
        {children}
      </div>
      {isMounted && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={classes([
              contentClass,
              !disableAnimations && 'Floating',
            ])}
            data-position={context.placement}
            data-transition={status}
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
