import { clamp01, keyOfMatchingRange, scale } from '@common/math';
import { classes } from '@common/react';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import type { PropsWithChildren } from 'react';
import type { BoxProps } from './Box';
import { DraggableControl } from './DraggableControl';

type Props = {
  /** Highest possible value. */
  maxValue: number;
  /** Lowest possible value. */
  minValue: number;
  /** Value itself, controls the position of the cursor. */
  value: number;
} & Partial<{
  /** Animates the value if it was changed externally. */
  animated: boolean;
  /** Custom css */
  className: string;
  /** Color of the slider. */
  color: string;
  /** Disables the slider. */
  disabled: boolean;
  /**
   * If set, this value will be used to set the fill percentage of the
   * progress bar filler independently of the main value.
   */
  fillValue: number;
  /** Format value using this function before displaying it. */
  format: (value: number) => string;
  /**
   * An event which fires when you release the slider or enter a number. This is
   * the default value event for controls.
   */
  onChange: (event: Event, value: number) => void;
  /** An event which fires only while dragging the slider. */
  onDrag: (event: Event, value: number) => void;
  /**
   * Applies a `color` to the slider based on whether the value lands in the
   * range between `from` and `to`.
   */
  ranges: Record<string, [number, number]>;
  /** Screen distance mouse needs to travel to adjust value by one `step`. */
  step: number;
  /**
   * The sensitivity of the slider. Adjust this if it feels too slow/fast
   * while dragging. Use higher for larger sliders. Default is 1.
   */
  stepPixelSize: number;
  /** Unit to display to the right of value. */
  unit: string;
}> &
  BoxProps &
  PropsWithChildren;

/**
 * ## Slider
 *
 * A horizontal,
 * [ProgressBar](https://tgstation.github.io/tgui-core/?path=/docs/components-progressbar--docs)-like
 * control which allows dialing * in precise values by dragging it left and right.
 *
 * Single click opens an input box to manually type in a number.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-slider--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function Slider(props: Props) {
  const {
    // Draggable props (passthrough)
    animated,
    format,
    maxValue,
    minValue,
    onChange,
    onDrag,
    step,
    stepPixelSize,
    unit,
    value,
    // Own props
    className,
    fillValue,
    color,
    ranges = {},
    children,
    ...rest
  } = props;

  const hasContent = children !== undefined;

  return (
    <DraggableControl
      dragMatrix={[1, 0]}
      {...{
        animated,
        format,
        maxValue,
        minValue,
        onChange,
        onDrag,
        step,
        stepPixelSize,
        unit,
        value,
      }}
    >
      {(control) => {
        const {
          displayElement,
          displayValue,
          dragging,
          editing,
          handleDragStart,
          inputElement,
        } = control;

        const hasFillValue = fillValue !== undefined && fillValue !== null;

        const scaledFillValue = clamp01(
          scale(fillValue ?? displayValue, minValue, maxValue),
        );
        const scaledDisplayValue = clamp01(
          scale(displayValue, minValue, maxValue),
        );

        const effectiveColor =
          color || keyOfMatchingRange(fillValue ?? value, ranges) || 'default';

        return (
          <div
            className={classes([
              'Slider',
              editing && 'Slider--editing',
              'ProgressBar',
              `ProgressBar--color--${effectiveColor}`,
              className,
              computeBoxClassName(rest),
            ])}
            {...computeBoxProps(rest)}
            onMouseDown={handleDragStart}
          >
            <div
              className={classes([
                'ProgressBar__fill',
                hasFillValue && !dragging && 'ProgressBar__fill--animated',
              ])}
              style={{
                opacity: 0.4,
                width: `${Math.max(scaledFillValue, scaledDisplayValue) * 100}%`,
              }}
            />
            <div
              className={classes([
                'ProgressBar__fill',
                !dragging && 'ProgressBar__fill--animated',
              ])}
              style={{
                width: `${Math.min(scaledFillValue, scaledDisplayValue) * 100}%`,
              }}
            />
            <div
              className="Slider__cursorOffset"
              style={{
                width: `${scaledDisplayValue * 100}%`,
              }}
            >
              <div className="Slider__cursor">
                {dragging && (
                  <div className="Slider__popupValue">{displayElement}</div>
                )}
              </div>
            </div>
            <div className="ProgressBar__content">
              {hasContent ? children : displayElement}
            </div>
            {inputElement}
          </div>
        );
      }}
    </DraggableControl>
  );
}
