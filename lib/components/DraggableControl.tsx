import { isEscape, KEY } from '@common/keys';
import { clamp } from '@common/math';
import {
  type MouseEventHandler,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import type { BoxProps } from './Box';

type StyleProp = string | number | undefined;

type Control = {
  /** Tooltip-like node to display. */
  displayElement: ReactNode;
  /** The value to display. */
  displayValue: number;
  /** Whether the element is being dragged */
  dragging: boolean;
  /** Whether the input is currently being edited */
  editing: boolean;
  /** Attach this to the element you want to be draggable  */
  handleDragStart: MouseEventHandler<HTMLDivElement>;
  /** The input element. */
  inputElement: ReactNode;
};

type Props = {
  children: (control: Control) => ReactNode;
  /** The external state value. */
  value: number;
} & Partial<{
  /** Animates the value if it was changed externally. */
  animated: boolean;
  /** The matrix to use for the drag. */
  dragMatrix: [number, number];
  /** onChange also fires when you drag the input. */
  tickWhileDragging: boolean;
  /** Format the value using this function before displaying it. */
  format: (value: number) => string;
  /** The maximum value. */
  maxValue: number;
  /** The minimum value. */
  minValue: number;
  /**
   * An event which fires when you release the input or successfully enter a
   * number. This is the default value event for controls.
   */
  onChange: (event: Event, value: number) => void;
  /** The step size. */
  step: number;
  /** The step size in pixels. */
  stepPixelSize: number | ((defaultStepPixelSize: number) => number);
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
function getScalarScreenOffset(event: MouseEvent, matrix: number[]): number {
  return event.screenX * matrix[0] + event.screenY * matrix[1];
}

/**
 * ## DraggableControl
 *
 * A wrapper component for draggable elements.
 * Generally, you won't need to use this component directly.
 */
export function DraggableControl({
  value,
  // Our props
  animated,
  children,
  dragMatrix = [1, 0],
  tickWhileDragging,
  format,
  maxValue = Number.POSITIVE_INFINITY,
  minValue = Number.NEGATIVE_INFINITY,
  onChange,
  step = 1,
  stepPixelSize,
  unclamped,
  unit,
  updateRate = DEFAULT_UPDATE_RATE,
  // Box props
  fontSize,
  height,
  lineHeight,
}: Props) {
  // just to re-render
  const [_stateValue, setStateValue] = useState(value);
  const [editing, setEditing] = useState(false);

  const dragging = useRef(false);
  const finalValue = useRef(value);
  const originalValue = useRef<number | null>(0);
  const origin = useRef<number | null>(0);
  const finalStepPixelSize = useRef<number | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dragIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (value !== finalValue.current) {
      finalValue.current = value;
      setStateValue(value);
    }
  }, [value]);

  /** Handed to the child component - onMouseDown  */
  function handleDragStart(event: React.MouseEvent<HTMLDivElement>): void {
    if (editing) return;

    if (typeof stepPixelSize !== 'number') {
      const defaultStepPixelSize =
        event.currentTarget.offsetWidth / ((maxValue - minValue) / step);
      if (stepPixelSize === undefined) {
        finalStepPixelSize.current = defaultStepPixelSize;
      } else if (typeof stepPixelSize === 'function') {
        finalStepPixelSize.current = stepPixelSize(defaultStepPixelSize);
      } else {
        throw new Error(
          `Unsupported value for stepPixelSize of type ${typeof stepPixelSize}`,
        );
      }
    } else {
      finalStepPixelSize.current = stepPixelSize;
    }

    document.body.style['pointer-events'] = 'none';

    origin.current = getScalarScreenOffset(event.nativeEvent, dragMatrix);
    originalValue.current = value;
    dragging.current = true;

    document.addEventListener('mouseup', handleDragEnd);

    timerRef.current = setTimeout(() => {
      checkDragging(event.nativeEvent);
    }, 100);
  }

  /** Called after x seconds to ensure it's still dragging */
  function checkDragging(event: MouseEvent): void {
    if (dragging.current) {
      document.addEventListener('mousemove', handleDragMove);

      dragIntervalRef.current = setInterval(() => {
        if (dragging.current && tickWhileDragging) onChange?.(event, value);
      }, updateRate);
    } else {
      setEditing(true);

      if (inputRef.current) {
        const input = inputRef.current;
        input.value = finalValue.current.toString();

        setTimeout(() => {
          input.focus();
          input.select();
        }, 10);
      }
    }

    if (timerRef.current) clearTimeout(timerRef.current);
  }

  /** User has held mouse down and is moving */
  function handleDragMove(event: MouseEvent): void {
    const currentOrigin = origin.current;
    if (currentOrigin === null) {
      throw new Error('Origin is unset.');
    }
    const position = getScalarScreenOffset(event, dragMatrix);
    const offset = position - currentOrigin;

    const currentFinalStepPixelSize = finalStepPixelSize.current;
    if (currentFinalStepPixelSize === null) {
      throw new Error('Final step pixel size has not been computed.');
    }
    const currentOriginalValue = originalValue.current;
    if (currentOriginalValue === null) {
      throw new Error('Original value is unset.');
    }
    // change in value is based on offset from drag origin
    const stepDifference = Math.trunc(offset / currentFinalStepPixelSize);
    const newValue = clamp(
      Math.floor(currentOriginalValue / step) * step + stepDifference * step,
      minValue,
      maxValue,
    );
    finalValue.current = newValue;
    setStateValue(newValue);
  }

  /** Ends all drag/click events */
  function handleDragEnd(event: MouseEvent): void {
    document.body.style['pointer-events'] = 'auto';

    if (dragIntervalRef.current) clearInterval(dragIntervalRef.current);

    origin.current = null;
    finalStepPixelSize.current = null;
    originalValue.current = null;

    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);

    if (!dragging.current) return; // user only clicked

    onChange?.(event, finalValue.current);
    dragging.current = false;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === KEY.Enter || isEscape(event.key)) {
      setEditing(false);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>): void {
    let ourValue = Number.parseFloat(event.currentTarget.value);
    if (!unclamped) {
      ourValue = clamp(ourValue, minValue, maxValue);
    }

    if (Number.isNaN(ourValue)) {
      setEditing(false);
      return;
    }

    finalValue.current = ourValue;
    setStateValue(ourValue);

    onChange?.(event.nativeEvent, ourValue);

    if (editing) {
      setEditing(false);
    }
  }

  let displayValue = value;
  if (dragging.current) {
    displayValue = finalValue.current;
  }

  const displayElement: ReactNode = (
    <>
      {animated && !dragging.current ? (
        <AnimatedNumber format={format} value={displayValue} />
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
      className="NumberInput__input"
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      style={{
        display: !editing ? 'none' : undefined,
        fontSize: fontSize as StyleProp,
        height: height as StyleProp,
        lineHeight: lineHeight as StyleProp,
      }}
    />
  );

  return children({
    displayElement,
    displayValue,
    dragging: dragging.current,
    editing,
    handleDragStart,
    inputElement,
  });
}
