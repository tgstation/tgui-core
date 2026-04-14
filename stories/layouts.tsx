import {
  type ComponentProps,
  type PropsWithChildren,
  type RefObject,
  useRef,
} from 'react';
import '../static/window.scss';
import { type BooleanLike, classes } from '@common/react';
import { type Box, Icon } from '@components';
import { toTitleCase } from 'tgui-core/common/string';
import { computeBoxClassName, computeBoxProps } from 'tgui-core/common/ui';

type Props = Partial<{
  canClose: BooleanLike;
  height: number;
  title: string;
  width: number;
}> &
  PropsWithChildren;

/** A mock window purely for testing */
export function Window(props: Props) {
  const {
    canClose = true,
    width = 475,
    height = 650,
    children,
    title = 'Untitled',
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  // TitleBar component.
  const finalTitle =
    (typeof title === 'string' &&
      title === title.toLowerCase() &&
      toTitleCase(title)) ||
    title;

  return (
    <div ref={ref} style={{ width, height }} className="Window">
      <div className="TitleBar">
        <div className="TitleBar__title">
          <Icon color="good" name="eye" className="TitleBar__statusIcon" />
          <div className="TitleBar__title">{finalTitle}</div>
        </div>
        {!!canClose && (
          <div className="TitleBar__close">
            <Icon className="TitleBar__close--icon" name="times" />
          </div>
        )}
      </div>
      {/* rest is placed 32px under top bar */}
      <div style={{ height: height - 32 }}>{children}</div>
      {/* Resize handlers */}
      <ResizeHandler targetRef={ref} axis="x" />
      <ResizeHandler targetRef={ref} axis="y" />
      <ResizeHandler targetRef={ref} axis="both" />
    </div>
  );
}

type ResizerProps = {
  axis: 'x' | 'y' | 'both';
  targetRef: RefObject<HTMLDivElement | null>;
};

function ResizeHandler(props: ResizerProps) {
  const { targetRef, axis } = props;

  const refWidth = useRef<number>(0);
  const refHeight = useRef<number>(0);
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);

  function handleDragStart(event: React.MouseEvent<HTMLDivElement>): void {
    if (!targetRef.current) {
      return;
    }

    refWidth.current = targetRef.current.offsetWidth;
    refHeight.current = targetRef.current.offsetHeight;
    dragStartX.current = event.clientX;
    dragStartY.current = event.clientY;

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.documentElement.classList.add(`resizing-${axis}`);
  }

  function handleDragMove(event: MouseEvent) {
    if (!targetRef.current) {
      return;
    }

    const deltaX = event.clientX - dragStartX.current;
    const deltaY = event.clientY - dragStartY.current;

    if (axis === 'x' || axis === 'both') {
      targetRef.current.style.width = `${refWidth.current + deltaX}px`;
    }

    if (axis === 'y' || axis === 'both') {
      targetRef.current.style.height = `${refHeight.current + deltaY}px`;
    }
  }

  function handleDragEnd() {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.documentElement.classList.remove(`resizing-${axis}`);
  }

  return (
    <div
      className={`Window__ResizeHandler ${axis}`}
      onMouseDown={(event) => handleDragStart(event)}
    />
  );
}

type ContentProps = Partial<{
  className: string;
  fitted: boolean;
  scrollable: boolean;
  vertical: boolean;
}> &
  ComponentProps<typeof Box> &
  PropsWithChildren;

function WindowContent(props: ContentProps) {
  const { children, className, fitted, scrollable, ...rest } = props;

  return (
    <div
      className={classes([
        'Layout__content',
        scrollable && 'Layout__content-Scrollable',
        'Window__content',
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {fitted ? (
        children
      ) : (
        <div className="Window__contentPadding">{children}</div>
      )}
    </div>
  );
}

Window.Content = WindowContent;
