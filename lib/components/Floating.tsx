import {
  FloatingPortal,
  type Placement,
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStatus,
} from '@floating-ui/react';
import {
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
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
  /** Classes with will be applied to the content. */
  contentClasses: string;
  /**
   * Indentation of floating element from children.
   * @default 6
   */
  contentOffset: number;
  /** Calculate floating width automatically, by using children width. */
  contentAutoWidth: boolean;
  /**
   * How long the animation takes in ms.
   * If specified, default animation will be disabled,
   * so you can freely make your own.
   *
   * Fully disables animations if 0
   * @default 200
   */
  animationDuration: number;
  /**
   * Delay in ms before opening and closing the floating element on hover.
   * @default 200
   */
  hoverDelay: number;
  /**
   * Open Floating element with hovering of reference element.
   */
  hoverOpen: boolean;
  /**
   * Passes ref directly to children, without wrapping it first.
   * Works only with JSX elements wrapped in `React.forwardRef`
   * or default HTML elements.
   */
  noWrap: boolean;
  /** Whitelisted classes, click on which will not close the floating element if he's outside. */
  allowOutsideClasses: string;
  /** Where to place the tooltip relative to the reference element. */
  placement: Placement;
  /** Stops event propagation on children. */
  stopChildPropagation: boolean;
  /** Close the floating element after interaction with it. */
  closeAfterInteract: boolean;
  /**
   * Called when the open state changes.
   * Returns the new open state.
   *
   * Can be used this way:
   * ```tsx
   * onOpenChange={open ? makeThingsOnOpen : makeThingsOnClose}
   * ```
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Called when the user clicks outside the floating element.
   */
  onClickOutside: () => void;
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
    contentClasses,
    contentOffset = 6,
    contentAutoWidth,
    baseZIndex,
    animationDuration,
    hoverDelay,
    hoverOpen,
    noWrap,
    placement,
    allowOutsideClasses,
    stopChildPropagation,
    closeAfterInteract,
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
    whileElementsMounted: autoUpdate,
    placement: placement || 'bottom',
    transform: false,
    middleware: [
      offset(contentOffset),
      flip({
        padding: 6,
        fallbackPlacements: [
          'bottom-start',
          'bottom-end',
          'top',
          'top-start',
          'top-end',
        ],
      }),
      contentAutoWidth &&
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              minWidth: `${rects.reference.width}px`,
            });
          },
        }),
    ],
  });

  const dismiss = useDismiss(context, {
    // Allow to add some secured classes, click on which will not close the floating element
    // Even if he's outside reference
    outsidePress: (event) =>
      (allowOutsideClasses &&
        event.target instanceof Element &&
        !event.target.closest(classes([allowOutsideClasses]))) ||
      false,
  });

  const openMethod = hoverOpen
    ? useHover(context, { restMs: hoverDelay || 200 })
    : useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    openMethod,
  ]);
  const { isMounted, status } = useTransitionStatus(context, {
    duration: animationDuration || 200,
  });

  const referenceProps = getReferenceProps({
    ref: refs.setReference,
    ...(stopChildPropagation && {
      onClick: (event) => event.stopPropagation(),
    }),
  });

  const floatingProps = getFloatingProps({
    onClick: () => {
      if (closeAfterInteract) {
        setIsOpen(false);
      }
    },
  });

  // Generate our children which will be used as reference
  let floatingChildren: ReactElement;
  if (noWrap && isValidElement(children)) {
    floatingChildren = cloneElement(children as ReactElement, referenceProps);
  } else {
    floatingChildren = (
      <div style={{ display: 'flow-root' }} {...referenceProps}>
        {children}
      </div>
    );
  }

  return (
    <>
      {floatingChildren}
      {isMounted && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={classes([
              'Floating',
              contentClasses,
              !animationDuration && 'Floating--animated',
            ])}
            data-position={context.placement}
            data-transition={status}
            style={{ ...floatingStyles, zIndex: baseZIndex || 5 }}
            {...floatingProps}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
