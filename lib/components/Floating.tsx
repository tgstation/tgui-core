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
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import { type BooleanLike, classes } from '../common/react';

type Props = {
  /** Interacting with this element will open the floating element. */
  children: ReactNode;
  /** The content to display like floating. */
  content: ReactNode;
} & Partial<{
  /**
   * Where the content will be displayed, relative to children.
   * - See [Placement](https://floating-ui.com/docs/useFloating#placement)
   * @default 'bottom'
   */
  placement: Placement;
  /** Classes with will be applied to the content. */
  contentClasses: string;
  /** Inline styles with will be applied to the content. */
  contentStyles: CSSProperties;
  /** Use calculated by Floating UI children width as content width. */
  contentAutoWidth: boolean;
  /**
   * Indentation of content element from children.
   * @default 6
   */
  contentOffset: number;
  /** Disables all interactions. */
  disabled: BooleanLike;
  /**
   * How long the animation takes in ms.
   * - If specified, default animation will be disabled.
   * - Fully disables animations if 0
   * @default 200
   */
  animationDuration: number;
  /** Content will open when you hover over children. */
  hoverOpen: boolean;
  /**
   * Delay in ms before opening and closing the content.
   * - Works only if used `hoverOpen` prop.
   * @default 200
   */
  hoverDelay: number;
  /**
   * Whitelisted classes.
   * Used to allow to add some secured classes,
   * click on which will not close the content.
   * - Classes must be sent like this: `".class1, .class2"`
   */
  allowedOutsideClasses: string;
  /** Stops event propagation on children. */
  stopChildPropagation: boolean;
  /** Close the content after interaction with it. */
  closeAfterInteract: boolean;
  /**
   * Called when the open state changes.
   * Returns the new open state.
   * Can be used this way:
   * ```tsx
   * onOpenChange={open ? makeThingsOnOpen : makeThingsOnClose}
   * ```
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Called when mounted
   */
  onMounted: () => void;
}>;

/**
 * ## Floating
 *  Floating lets you position elements so that they don't go out of the bounds of the window.
 * - [Documentation](https://floating-ui.com/docs/react) for more information.
 */
export function Floating(props: Props) {
  const {
    allowedOutsideClasses,
    animationDuration,
    children,
    closeAfterInteract,
    content,
    contentAutoWidth,
    contentClasses,
    contentOffset = 6,
    contentStyles,
    disabled,
    hoverDelay,
    hoverOpen,
    onMounted,
    placement,
    stopChildPropagation,
    onOpenChange,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange(isOpen) {
      setIsOpen(isOpen);
      onOpenChange?.(isOpen);
    },
    whileElementsMounted: (reference, floating, update) => {
      if (onMounted !== undefined) {
        onMounted();
      }
      return autoUpdate(reference, floating, update);
    },
    placement: placement || 'bottom',
    transform: false, // More expensive but allows to use transform for animations
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
            elements.floating.style.width = `${rects.reference.width}px`;
          },
        }),
    ],
  });

  const { isMounted, status } = useTransitionStatus(context, {
    duration: animationDuration || 200,
  });

  const dismiss = useDismiss(context, {
    ancestorScroll: true,
    outsidePress: (event) =>
      (allowedOutsideClasses &&
        event.target instanceof Element &&
        !event.target.closest(allowedOutsideClasses)) ||
      false,
  });

  const click = useClick(context, { enabled: !disabled });
  const hover = useHover(context, {
    enabled: !disabled,
    restMs: hoverDelay || 200,
  });
  const openMethod = hoverOpen ? hover : click;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    openMethod,
  ]);

  const referenceProps = getReferenceProps({
    ref: refs.setReference,
    ...(stopChildPropagation && {
      onClick: (event) => event.stopPropagation(),
    }),
  });

  const floatingProps = getFloatingProps({
    onClick: () => {
      if (closeAfterInteract) {
        context.onOpenChange(false);
      }
    },
  });

  // Generate our children which will be used as reference
  let floatingChildren: ReactElement;
  if (isValidElement(children)) {
    floatingChildren = cloneElement(children as ReactElement, referenceProps);
  } else {
    floatingChildren = <div {...referenceProps}>{children}</div>;
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
              !animationDuration && 'Floating--animated',
              contentClasses,
            ])}
            data-position={context.placement}
            data-transition={status}
            style={{ ...floatingStyles, ...contentStyles }}
            {...floatingProps}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
