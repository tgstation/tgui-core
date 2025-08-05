import { computeBoxProps } from '@common/ui';
import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import type { BoxProps } from './Box';
import { Button } from './Button';
import { ProgressBar } from './ProgressBar';
import { Stack } from './Stack';

type Props = {
  /** The width of the image to display. */
  imageWidth: number;
} & Partial<{
  /** The background image to display. */
  backgroundImage: string;
  /** The initial left position of the image. */
  initialLeft: number;
  /** The initial top position of the image. */
  initialTop: number;
  /** Padding applied to the right of the zoom controls */
  zoomPadding: number;
  /**
   * Minimum level of zoom possible
   * @default 0.5
   */
  minimumZoom: number;
  /**
   * Maximum level of zoom possible
   * @default 1.5
   */
  maximumZoom: number;
  /**
   * Increments by which zoom level changes every scroll/button click
   * @default 0.1
   */
  zoomIncrement: number;
  /** X position to snap to. When this value is changed, the element will snap to said position */
  zoomToX: number;
  /** Y position to snap to. When this value is changed, the element will snap to said position */
  zoomToY: number;
  /** A callback function that is called when the background image is moved. */
  onBackgroundMoved: (newX: number, newY: number) => void;
  /** A callback function that is called when the zoom value changes. */
  onZoomChange: (newZoomValue: number) => void;
}> &
  BoxProps &
  PropsWithChildren;

enum ZoomDirection {
  Increase = 'increase',
  Decrease = 'decrease',
}

/**
 * ## InfinitePlane
 *
 * Creates a scrolling infinite plane using a background image.
 *
 * Example:
 *
 * ```tsx
 * <InfinitePlane imageWidth={100} backgroundImage="https://example.com/image.png">
 *   <Box position="absolute" top={0} left={0}>
 *     Hello, world!
 *   </Box>
 *   <Box position="absolute" top={0} left={100}>
 *     Hello, world!
 *   </Box>
 *   <Box position="absolute" top={0} left={200}>
 *     Hello, world!
 *   </Box>
 * </InfinitePlane>
 * ```
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-infiniteplane--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function InfinitePlane({
  backgroundImage,
  children,
  imageWidth,
  zoomPadding = 0,
  initialLeft = 0,
  initialTop = 0,
  minimumZoom = 0.5,
  maximumZoom = 1.5,
  zoomIncrement = 0.1,
  zoomToX,
  zoomToY,
  onBackgroundMoved,
  onZoomChange,
  ...rest
}: Props) {
  const computedZoomToX = zoomToX !== undefined ? zoomToX : initialLeft;
  const computedZoomToY = zoomToY !== undefined ? zoomToY : initialTop;

  const [lastLeft, setLastLeft] = useState(initialLeft);
  const [lastTop, setLastTop] = useState(initialTop);
  const [left, setLeft] = useState(initialLeft);
  const [top, setTop] = useState(initialTop);
  const [mouseDown, setMouseDown] = useState(false);
  const [zoom, setZoom] = useState(1);
  const divRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>): void {
    setLastLeft(event.clientX - left);
    setLastTop(event.clientY - top);
    setMouseDown(true);
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>): void {
    if (!mouseDown) return;

    const newX = event.clientX - lastLeft;
    const newY = event.clientY - lastTop;

    onBackgroundMoved?.(newX, newY);

    setLeft(newX);
    setTop(newY);
  }

  function onMouseUp(): void {
    setMouseDown(false);
  }

  function handleWheelScroll(event: React.WheelEvent<HTMLDivElement>): void {
    if (event.deltaY === 0) return;
    event.preventDefault();
    handleZoom(
      event.deltaY < 0 ? ZoomDirection.Increase : ZoomDirection.Decrease,
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
    );
  }

  function handleZoom(
    direction: ZoomDirection,
    zoomX: number,
    zoomY: number,
  ): void {
    if (direction === ZoomDirection.Increase && zoom >= maximumZoom) return;
    if (direction === ZoomDirection.Decrease && zoom <= minimumZoom) return;

    const increment =
      direction === ZoomDirection.Increase ? zoomIncrement : -zoomIncrement;
    const newZoom = Math.round((zoom + increment) * 10) / 10;
    // Convert left and top values to new ones to zoom into the screen center
    // instead of (0, 0)
    const newLeft = ((left - zoomX) / zoom) * newZoom + zoomX;
    const newTop = (top - zoomY) * newZoom + zoomY;

    setZoom(newZoom);
    setLeft(newLeft);
    setTop(newTop);
    onZoomChange?.(newZoom);
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  useEffect(() => {
    if (computedZoomToX === undefined || computedZoomToY === undefined) return;
    setLeft(computedZoomToX as number);
    setTop(computedZoomToY as number);
  }, [computedZoomToX, computedZoomToY]);

  return (
    <div
      {...computeBoxProps({
        ...rest,
        style: {
          ...rest.style,
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        },
      })}
      ref={divRef}
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onWheel={handleWheelScroll}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: `${left}px ${top}px`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${zoom * imageWidth}px`,
          transition: `${mouseDown ? '0s' : '0.075s'} linear`,
          height: '100%',
          inset: 0,
          position: 'absolute',
          width: '100%',
        }}
      />
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{
          height: '100%',
          inset: 0,
          position: 'absolute',
          transform: `translate(${left}px, ${top}px) scale(${zoom})`,
          transition: `${mouseDown ? '0s' : '0.075s'} linear`,
          transformOrigin: 'top left',
          width: '100%',
        }}
      >
        {children}
      </div>
      <ZoomControls
        padding={zoomPadding}
        minimumZoom={minimumZoom}
        maximumZoom={maximumZoom}
        zoomX={(divRef.current?.offsetWidth || 0) / 2}
        zoomY={(divRef.current?.offsetHeight || 0) / 2}
        onZoomClick={handleZoom}
        zoom={zoom}
      />
    </div>
  );
}

type ZoomProps = {
  zoom: number;
  padding: number;
  minimumZoom: number;
  maximumZoom: number;
  zoomX: number;
  zoomY: number;
  onZoomClick: (direction: ZoomDirection, zoomX: number, zoomY: number) => void;
};

function ZoomControls(props: ZoomProps) {
  const { zoom, padding, onZoomClick, minimumZoom, maximumZoom, zoomX, zoomY } =
    props;

  return (
    <div style={{ left: 5, position: 'absolute', right: 5 + padding, top: 5 }}>
      <Stack>
        <Stack.Item>
          <Button
            disabled={zoom <= minimumZoom}
            icon="minus"
            onClick={() => onZoomClick(ZoomDirection.Decrease, zoomX, zoomY)}
          />
        </Stack.Item>
        <Stack.Item grow>
          <ProgressBar
            maxValue={maximumZoom}
            minValue={minimumZoom}
            value={zoom}
          >
            {zoom}x
          </ProgressBar>
        </Stack.Item>
        <Stack.Item>
          <Button
            disabled={zoom >= maximumZoom}
            icon="plus"
            onClick={() => onZoomClick(ZoomDirection.Increase, zoomX, zoomY)}
          />
        </Stack.Item>
      </Stack>
    </div>
  );
}
