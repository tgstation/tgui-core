import {
  type MouseEvent,
  type PropsWithChildren,
  useEffect,
  useState,
  type WheelEvent,
} from 'react';
import { computeBoxProps } from '../common/ui';
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

const ZOOM_MIN_VAL = 0.5;
const ZOOM_MAX_VAL = 1.5;

const ZOOM_INCREMENT = 0.1;

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
 */
export function InfinitePlane(props: Props) {
  const {
    backgroundImage,
    children,
    imageWidth,
    zoomPadding = 0,
    initialLeft = 0,
    initialTop = 0,
    onBackgroundMoved,
    onZoomChange,
    ...rest
  } = props;

  const [lastLeft, setLastLeft] = useState(0);
  const [lastTop, setLastTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [top, setTop] = useState(0);
  const [zoom, setZoom] = useState(1);

  function handleMouseDown(event: MouseEvent<HTMLDivElement>) {
    setLastLeft(event.clientX - left);
    setLastTop(event.clientY - top);
    setMouseDown(true);
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!mouseDown) return;

    const newX = event.clientX - lastLeft;
    const newY = event.clientY - lastTop;

    onBackgroundMoved?.(newX + initialLeft, newY + initialTop);

    setLeft(newX);
    setTop(newY);
  }

  function onMouseUp() {
    setMouseDown(false);
  }

  function handleWheelScroll(event: WheelEvent<HTMLDivElement>) {
    if (event.deltaY === 0) return;

    event.preventDefault();
    handleZoom(
      event.deltaY < 0 ? ZoomDirection.Increase : ZoomDirection.Decrease,
    );
  }

  function handleZoom(direction: ZoomDirection) {
    if (direction === ZoomDirection.Increase && zoom >= ZOOM_MAX_VAL) return;
    if (direction === ZoomDirection.Decrease && zoom <= ZOOM_MIN_VAL) return;

    const increment =
      direction === ZoomDirection.Increase ? ZOOM_INCREMENT : -ZOOM_INCREMENT;
    const newZoom = Math.round((zoom + increment) * 10) / 10;

    setZoom(newZoom);
    onZoomChange?.(newZoom);
  }

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const finalLeft = initialLeft + left;
  const finalTop = initialTop + top;

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
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onWheel={handleWheelScroll}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: `${finalLeft}px ${finalTop}px`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${zoom * imageWidth}px`,
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
          transform: `translate(${finalLeft}px, ${finalTop}px) scale(${zoom})`,
          transformOrigin: 'top left',
          width: '100%',
        }}
      >
        {children}
      </div>
      <ZoomControls
        padding={zoomPadding}
        onZoomClick={handleZoom}
        zoom={zoom}
      />
    </div>
  );
}

type ZoomProps = {
  zoom: number;
  padding: number;
  onZoomClick: (direction: ZoomDirection) => void;
};

function ZoomControls(props: ZoomProps) {
  const { zoom, padding, onZoomClick } = props;

  return (
    <div style={{ left: 5, position: 'absolute', right: 5 + padding, top: 5 }}>
      <Stack>
        <Stack.Item>
          <Button
            disabled={zoom <= ZOOM_MIN_VAL}
            icon="minus"
            onClick={() => onZoomClick(ZoomDirection.Decrease)}
          />
        </Stack.Item>
        <Stack.Item grow>
          <ProgressBar
            maxValue={ZOOM_MAX_VAL}
            minValue={ZOOM_MIN_VAL}
            value={zoom}
          >
            {zoom}x
          </ProgressBar>
        </Stack.Item>
        <Stack.Item>
          <Button
            disabled={zoom >= ZOOM_MAX_VAL}
            icon="plus"
            onClick={() => onZoomClick(ZoomDirection.Increase)}
          />
        </Stack.Item>
      </Stack>
    </div>
  );
}
