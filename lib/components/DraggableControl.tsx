import {
  type MouseEventHandler,
  type ReactNode,
  useRef,
  useState,
} from 'react';
import { KEY } from '../common/keys';
import { clamp } from '../common/math';
import { AnimatedNumber } from './AnimatedNumber';
import type { BoxProps } from './Box';

type StyleProp = string | number | undefined;

type Control = {
  displayElement: ReactNode;
  displayValue: number;
  dragging: boolean;
  editing: boolean;
  handleDragStart: MouseEventHandler<HTMLDivElement>;
  inputElement: ReactNode;
  value: number;
};

type Props = {
  children: (control: Control) => ReactNode;
} & Partial<{
  /** Animates the value if it was changed externally. */
  animated: boolean;
  /** The matrix to use for the drag. */
  dragMatrix: [number, number];
  /** Format the value using this function before displaying it. */
  format: (value: number) => string;
  /** The maximum value. */
  maxValue: number;
  /** The minimum value. */
  minValue: number;
  /** An event which fires when you release the input, or successfully enter a number. */
  onChange: (event: Event, value: number) => void;
  /** An event which fires when you drag the input. */
  onDrag: (event: MouseEvent, value: number) => void;
  /** The step size. */
  step: number;
  /** The step size in pixels. */
  stepPixelSize: number;
  /** The number of milliseconds to suppress flickering. */
  suppressFlicker: number;
  /** Whether to unclamp the value. */
  unclamped: boolean;
  /** The unit of the value. */
  unit: string;
  /** The rate at which the value is updated. */
  updateRate: number;
}> &
  Omit<BoxProps, 'children'>;

const DEFAULT_UPDATE_RATE = 400;

/** Reduces screen offset to a single number based on the matrix provided. */
function getScalarScreenOffset(e: MouseEvent, matrix: number[]) {
  return e.screenX * matrix[0] + e.screenY * matrix[1];
}

/**
 * ## DraggableControl
 *
 * A wrapper component for draggable elements.
 * Generally, you won't need to use this component directly.
 */
export function DraggableControl(props: Props) {
  const {
    // Our props
    animated,
    dragMatrix = [1, 0],
    format,
    maxValue = Number.POSITIVE_INFINITY,
    minValue = Number.NEGATIVE_INFINITY,
    onChange,
    onDrag,
    step = 1,
    stepPixelSize = 1,
    suppressFlicker = 0,
    unclamped,
    unit,
    updateRate = DEFAULT_UPDATE_RATE,
    children,
    // Box props
    fontSize,
    height,
    lineHeight,
  } = props;

  const [value, setValue] = useState(minValue);
  const [dragging, setDragging] = useState(false);
  const [editing, setEditing] = useState(false);
  const [internalValue, setInternalValue] = useState(0);
  const [origin, setOrigin] = useState(0);
  const [suppressingFlicker, setSuppressingFlicker] = useState(false);

  const flickerTimer = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dragIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /** Triggers on mouse up */
  function handleDragEnd(event: MouseEvent) {
    document.body.style['pointer-events'] = 'auto';

    if (timerRef.current) clearTimeout(timerRef.current);
    if (dragIntervalRef.current) clearInterval(dragIntervalRef.current);

    setDragging(false);
    setEditing(false);
    setOrigin(0);
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);

    console.log('removed');
    if (dragging) {
      suppress();
      onChange?.(event, value);
      onDrag?.(event, value);
      return;
    }

    if (inputRef.current) {
      const input = inputRef.current;
      input.value = internalValue.toString();

      setTimeout(() => {
        input.focus();
        input.select();
      }, 10);
    }
  }

  /** Triggers on mouse move */
  function handleDragMove(event: MouseEvent) {
    const offset = getScalarScreenOffset(event, dragMatrix) - origin;

    if (!dragging) {
      if (Math.abs(offset) > 4) {
        setDragging(true);
      }
      return;
    }

    const stepOffset = Number.isFinite(minValue) ? minValue % step : 0;

    // Translate mouse movement to value
    // Give it some headroom (by increasing clamp range by 1 step)
    const newValue = clamp(
      internalValue + (offset * step) / stepPixelSize,
      minValue - step,
      maxValue + step,
    );

    setInternalValue(newValue);

    // Clamp the final value
    setValue(
      clamp(newValue - (newValue % step) + stepOffset, minValue, maxValue),
    );

    setOrigin(getScalarScreenOffset(event, dragMatrix));
  }

  /** Handed to the child component - onMouseDown  */
  function handleDragStart(event: React.MouseEvent<HTMLDivElement>) {
    if (editing) return;

    const baseEvent = event.nativeEvent;

    document.body.style['pointer-events'] = 'none';
    setOrigin(getScalarScreenOffset(baseEvent, dragMatrix));
    setValue(value);
    setInternalValue(value);

    timerRef.current = setTimeout(() => {
      setDragging(true);
    }, 250);

    dragIntervalRef.current = setInterval(() => {
      if (dragging && onDrag) {
        onDrag(baseEvent, value);
      }
    }, updateRate);

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  }

  /** Triggers on key down */
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEY.Enter) {
      event.preventDefault();
      event.stopPropagation();
      setEventValue(event.nativeEvent, event.currentTarget.value);
      return;
    }
    if (event.key === KEY.Escape) {
      setEditing(false);
      return;
    }
  }

  /** Sets the value of the event */
  function setEventValue(event: KeyboardEvent | FocusEvent, newValue: string) {
    let ourValue = Number.parseFloat(newValue);
    if (!unclamped) {
      ourValue = clamp(ourValue, minValue, maxValue);
    }

    if (Number.isNaN(ourValue)) {
      setEditing(false);
      return;
    }

    setEditing(false);
    setValue(ourValue);
    setInternalValue(ourValue);
    suppress();
    onChange?.(event, ourValue);
  }

  /** Suppresses flickering */
  function suppress() {
    if (suppressFlicker <= 0) return;

    const timer = flickerTimer.current;
    if (!timer) return;

    setSuppressingFlicker(true);
    clearTimeout(timer);
    flickerTimer.current = setTimeout(() => {
      setSuppressingFlicker(false);
    }, suppressFlicker);

    return () => clearTimeout(timer);
  }

  /** Triggers on blur */
  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (editing) {
      setEditing(false);
    }

    setEventValue(event.nativeEvent, event.currentTarget.value);
  }

  const intermediateValue = value;
  let displayValue = value;
  if (dragging || suppressingFlicker) {
    displayValue = intermediateValue;
  }

  const displayElement: ReactNode = (
    <>
      {animated && !dragging && !suppressingFlicker ? (
        <AnimatedNumber value={displayValue} format={format} />
      ) : format ? (
        format(displayValue)
      ) : (
        displayValue
      )}

      {unit ? ` ${unit}` : ''}
    </>
  );

  const inputElement: ReactNode = (
    <input
      ref={inputRef}
      className="NumberInput__input"
      style={{
        display: !editing ? 'none' : undefined,
        height: height as StyleProp,
        lineHeight: lineHeight as StyleProp,
        fontSize: fontSize as StyleProp,
      }}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );

  return children({
    displayElement,
    displayValue,
    dragging,
    editing,
    handleDragStart,
    inputElement,
    value,
  });
}
