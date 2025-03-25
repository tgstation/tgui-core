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
  /** The content to display like floating. */
  content: ReactNode;
} & Partial<{
  /**
   * Where the content will be displayed, relative to children.
   * - See [Placement](https://floating-ui.com/docs/useFloating#placement)
   * @default 'bottom'
   */
  placement: Placement;
  /**
   * Passes ref directly to children, without wrapping it first.
   * Works only with JSX elements wrapped in `React.forwardRef`
   * or default HTML elements.
   */
  childrenNoWrap: boolean;
  /** Classes with will be applied to the content. */
  contentClasses: string;
  /** Use calculated by Floating UI children width as content width. */
  contentAutoWidth: boolean;
  /**
   * Indentation of content element from children.
   * @default 6
   */
  contentOffset: number;
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
    placement,
    childrenNoWrap,
    contentClasses,
    contentAutoWidth,
    contentOffset = 6,
    animationDuration,
    hoverOpen,
    hoverDelay,
    allowedOutsideClasses,
    stopChildPropagation,
    closeAfterInteract,
    onOpenChange,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange(isOpen) {
      setIsOpen(isOpen);
      onOpenChange?.(isOpen);
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

  const { isMounted, status } = useTransitionStatus(context, {
    duration: animationDuration || 200,
  });

  const dismiss = useDismiss(context, {
    outsidePress: (event) =>
      (allowedOutsideClasses &&
        event.target instanceof Element &&
        !event.target.closest(classes([allowedOutsideClasses]))) ||
      false,
  });

  const click = useClick(context);
  const hover = useHover(context, { restMs: hoverDelay || 200 });
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
        setIsOpen(false);
      }
    },
  });

  // Generate our children which will be used as reference
  let floatingChildren: ReactElement;
  if (childrenNoWrap && isValidElement(children)) {
    floatingChildren = cloneElement(children as ReactElement, referenceProps);
  } else {
    floatingChildren = <span {...referenceProps}>{children}</span>;
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
            style={{ ...floatingStyles }}
            {...floatingProps}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
