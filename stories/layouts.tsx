import {
  type ComponentProps,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from 'react';
import '../static/window.scss';
import { classes } from '@common/react';
import { type Box, Icon } from '@components';
import { toTitleCase } from 'tgui-core/common/string';
import { computeBoxClassName, computeBoxProps } from 'tgui-core/common/ui';

type Props = Partial<{
  canClose: boolean;
  height: number;
  title: string;
  width: number;
  buttons: ReactNode;
}> &
  PropsWithChildren;

/** A mock window purely for testing */
export function Window(props: Props) {
  const {
    canClose = true,
    width = 475,
    height = 650,
    children,
    buttons,
    title = 'Mock Window',
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  // TitleBar component.
  const finalTitle =
    (typeof title === 'string' &&
      title === title.toLowerCase() &&
      toTitleCase(title)) ||
    title;

  function centerUI() {
    const rootElement = document.getElementById('storybook-root');
    if (!rootElement || !ref.current) {
      return;
    }

    const windowRect = rootElement.getBoundingClientRect();
    const elementRect = ref.current.getBoundingClientRect();
    const deltaX =
      (windowRect.width - elementRect.width) / 2 - elementRect.left;
    const deltaY =
      (windowRect.height - elementRect.height) / 2 - elementRect.top;

    ref.current.style.top = `${elementRect.top + deltaY}px`;
    ref.current.style.left = `${elementRect.left + deltaX}px`;
  }

  useEffect(() => {
    centerUI();
  }, []);

  return (
    <div ref={ref} style={{ width, height }} className="Window">
      <TitleBar targetRef={ref} canClose={canClose} title={finalTitle}>
        {buttons}
      </TitleBar>
      {/* rest is placed 32px under top bar */}
      <div style={{ height: height - 32 }}>{children}</div>
      {/* Resize handlers */}
      <ResizeHandler targetRef={ref} axis="x" />
      <ResizeHandler targetRef={ref} axis="y" />
      <ResizeHandler targetRef={ref} axis="both" />
    </div>
  );
}

type TitleBarProps = {
  title: string;
  canClose: boolean;
  children: ReactNode;
  targetRef: RefObject<HTMLDivElement | null>;
};

function TitleBar(props: TitleBarProps) {
  const { targetRef, canClose, title, children } = props;

  const windowPos = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const lastDelta = useRef({ x: 0, y: 0 });

  function handleDragStart(event: React.MouseEvent<HTMLDivElement>) {
    if (!targetRef.current) {
      return;
    }

    dragStartPos.current = { x: event.clientX, y: event.clientY };
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.documentElement.classList.add('dragging', 'moving');
  }

  function handleDragMove(event: MouseEvent) {
    if (!targetRef.current) {
      return;
    }

    lastDelta.current = {
      x: event.clientX - dragStartPos.current.x,
      y: event.clientY - dragStartPos.current.y,
    };

    targetRef.current.style.transform = `translate(${windowPos.current.x + lastDelta.current.x}px, ${windowPos.current.y + lastDelta.current.y}px)`;
  }

  function handleDragEnd() {
    windowPos.current.x += lastDelta.current.x;
    windowPos.current.y += lastDelta.current.y;

    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.documentElement.classList.remove('dragging', 'moving');
  }

  return (
    <div className="TitleBar" onMouseDown={handleDragStart}>
      <div className="TitleBar__title">
        <Icon color="good" name="eye" className="TitleBar__statusIcon" />
        <div className="TitleBar__title">{title}</div>
      </div>
      {!!children && <div className="TitleBar__buttons">{children}</div>}
      {!!canClose && (
        <div className="TitleBar__close">
          <Icon className="TitleBar__close--icon" name="times" />
        </div>
      )}
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
      onMouseDown={handleDragStart}
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
