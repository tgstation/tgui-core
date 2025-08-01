import { keyOfMatchingRange, scale } from '@common/math';
import { type BooleanLike, classes } from '@common/react';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import type { Placement } from '@floating-ui/react';
import type { BoxProps } from './Box';
import { DraggableControl } from './DraggableControl';
import { Floating } from './Floating';

type Props = {
  /** Value itself, controls the position of the cursor. */
  value: number;
} & Partial<{
  /** Animates the value if it was changed externally. */
  animated: boolean;
  /** Knob can be bipolar or unipolar. */
  bipolar: boolean;
  /** Color of the outer ring around the knob. */
  color: string | BooleanLike;
  /** onChange also fires every 500ms while dragging the input. */
  tickWhileDragging: boolean;
  /**
   * If set, this value will be used to set the fill percentage of the outer
   * ring independently of the main value.
   */
  fillValue: number;
  /** Format value using this function before displaying it. */
  format: (value: number) => string;
  /** Highest possible value. */
  maxValue: number;
  /** Lowest possible value. */
  minValue: number;
  /**
   * An event which fires when release the knob or enter a number. This is the
   * default value event for controls.
   */
  onChange: (event: Event, value: number) => void;
  /**
   * Applies a `color` to the outer ring around the knob based on whether the
   * value lands in the range between `from` and `to`.
   */
  ranges: Record<string, [number, number]>;
  /**
   * Relative size of the knob. `1` is normal size, `2` is two times bigger.
   * Fractional numbers are supported.
   */
  size: number;
  /** Adjust value by this amount when dragging the input. */
  step: number;
  /** Screen distance mouse needs to travel to adjust value by one `step`. */
  stepPixelSize: number;
  /** Whether to clamp the value to the range. */
  unclamped: boolean;
  /** Unit to display to the right of value. */
  unit: string;
  /** Value popup placement, like on tooltips. */
  popupPosition: Placement;
}> &
  BoxProps;

/**
 * ## Knob
 *
 * A radial control which allows dialing in precise values by dragging it
 * up and down.
 *
 * Single click opens an input box to manually type in a number.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-knob--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function Knob(props: Props) {
  const {
    // Draggable props (passthrough)
    animated,
    tickWhileDragging,
    format,
    maxValue,
    minValue,
    onChange,
    step,
    stepPixelSize,
    unclamped,
    unit,
    value,
    // Own props
    bipolar,
    popupPosition,
    className,
    color,
    fillValue,
    ranges = {},
    size = 1,
    style,
    ...rest
  } = props;

  return (
    <DraggableControl
      dragMatrix={[0, -1]}
      {...{
        animated,
        tickWhileDragging,
        format,
        maxValue,
        minValue,
        onChange,
        step,
        stepPixelSize,
        unclamped,
        unit,
        value,
      }}
    >
      {(control) => {
        const {
          displayElement,
          displayValue,
          dragging,
          handleDragStart,
          inputElement,
        } = control;
        const scaledFillValue = scale(
          fillValue ?? displayValue,
          minValue,
          maxValue,
        );
        const scaledDisplayValue = scale(displayValue, minValue, maxValue);
        const effectiveColor =
          color || keyOfMatchingRange(fillValue ?? value, ranges) || 'default';
        const rotation = Math.min((scaledDisplayValue - 0.5) * 270, 225);

        return (
          <Floating
            content={displayElement}
            contentClasses="Knob__popupValue"
            handleOpen={dragging}
            placement={popupPosition || 'top'}
            preventPortal
          >
            <div
              className={classes([
                'Knob',
                `Knob--color--${effectiveColor}`,
                bipolar && 'Knob--bipolar',
                className,
                computeBoxClassName(rest),
              ])}
              {...computeBoxProps({
                style: {
                  fontSize: `${size}em`,
                  ...style,
                },
                ...rest,
              })}
              onMouseDown={handleDragStart}
            >
              <div className="Knob__circle">
                <div
                  className="Knob__cursorBox"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <div className="Knob__cursor" />
                </div>
              </div>
              <svg
                className="Knob__ring Knob__ringTrackPivot"
                viewBox="0 0 100 100"
              >
                <circle className="Knob__ringTrack" cx="50" cy="50" r="50" />
                <title>track</title>
              </svg>
              <svg
                className="Knob__ring Knob__ringFillPivot"
                viewBox="0 0 100 100"
              >
                <title>fill</title>
                <circle
                  className="Knob__ringFill"
                  cx="50"
                  cy="50"
                  r="50"
                  style={{
                    strokeDashoffset: Math.max(
                      ((bipolar ? 2.75 : 2.0) - scaledFillValue * 1.5) *
                        Math.PI *
                        50,
                      0,
                    ),
                  }}
                />
              </svg>
              {inputElement}
            </div>
          </Floating>
        );
      }}
    </DraggableControl>
  );
}
