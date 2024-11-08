import {
  Component,
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type RefObject,
  createRef,
} from 'react';

import { KEY, isEscape } from '../common/keys';
import { clamp, round } from '../common/math';
import { type BooleanLike, classes } from '../common/react';
import styles from '../styles/components/NumberInput.module.scss';
import { AnimatedNumber } from './AnimatedNumber';
import { Box } from './Box';

type Props = Required<{
  maxValue: number;
  minValue: number;
  step: number;
  value: number | string;
}> &
  Partial<{
    animated: BooleanLike;
    className: string;
    disabled: BooleanLike;
    fluid: BooleanLike;
    fontSize: string;
    format: (value: number) => string;
    height: string;
    lineHeight: string;
    onChange: (value: number) => void;
    onDrag: (value: number) => void;
    stepPixelSize: number;
    unit: string;
    width: string;
  }>;

type State = {
  currentValue: number;
  dragging: BooleanLike;
  editing: BooleanLike;
  origin: number;
  previousValue: number;
};

export class NumberInput extends Component<Props, State> {
  // Ref to the input field to set focus & highlight
  inputRef: RefObject<HTMLInputElement> = createRef();

  // After this time has elapsed we are in drag mode so no editing when dragging ends
  dragTimeout: NodeJS.Timeout;

  // Call onDrag at this interval
  dragInterval: NodeJS.Timeout;

  // default values for the number input state
  state: State = {
    editing: false,
    dragging: false,
    currentValue: 0,
    previousValue: 0,
    origin: 0,
  };

  componentDidMount(): void {
    const displayValue = Number.parseFloat(this.props.value.toString());

    this.setState({
      currentValue: displayValue,
      previousValue: displayValue,
    });
  }

  handleDragStart: MouseEventHandler<HTMLDivElement> = (event) => {
    const { value, disabled } = this.props;
    const { editing } = this.state;
    if (disabled || editing) {
      return;
    }
    document.body.style['pointer-events'] = 'none';

    const parsedValue = Number.parseFloat(value.toString());
    this.setState({
      dragging: false,
      origin: event.screenY,
      currentValue: parsedValue,
      previousValue: parsedValue,
    });

    this.dragTimeout = setTimeout(() => {
      this.setState({
        dragging: true,
      });
    }, 250);
    this.dragInterval = setInterval(() => {
      const { dragging, currentValue, previousValue } = this.state;
      const { onDrag } = this.props;
      if (dragging && currentValue !== previousValue) {
        this.setState({
          previousValue: currentValue,
        });
        onDrag?.(currentValue);
      }
    }, 400);

    document.addEventListener('mousemove', this.handleDragMove);
    document.addEventListener('mouseup', this.handleDragEnd);
  };

  handleDragMove = (event: MouseEvent) => {
    const { minValue, maxValue, step, stepPixelSize, disabled } = this.props;
    if (disabled) {
      return;
    }

    this.setState((prevState) => {
      const state = { ...prevState };

      const offset = state.origin - event.screenY;
      if (prevState.dragging) {
        // Translate mouse movement to value
        // Give it some headroom (by increasing clamp range by 1 step)
        const stepSize = stepPixelSize || 1;
        const internalValue = clamp(
          state.currentValue + (offset * step) / stepSize,
          minValue - step,
          maxValue + step,
        );
        if (Math.abs(internalValue - state.currentValue) >= step) {
          state.currentValue = clamp(
            round(internalValue / step, 0) * step,
            minValue,
            maxValue,
          );
          // Set the new origin
          state.origin = event.screenY;
        } else if (Math.abs(offset) > stepSize) {
          state.origin = event.screenY;
        }
      } else if (Math.abs(offset) > 4) {
        state.dragging = true;
      }
      return state;
    });
  };

  handleDragEnd = (_event: MouseEvent) => {
    const { dragging, currentValue } = this.state;
    const { onDrag, onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    document.body.style['pointer-events'] = 'auto';

    clearInterval(this.dragInterval);
    clearTimeout(this.dragTimeout);

    this.setState({
      dragging: false,
      editing: !dragging,
      previousValue: currentValue,
    });
    if (dragging) {
      onChange?.(currentValue);
      onDrag?.(currentValue);
    } else if (this.inputRef) {
      const input = this.inputRef.current;
      if (input) {
        input.value = `${currentValue}`;
        setTimeout(() => {
          input.focus();
          input.select();
        }, 10);
      }
    }

    document.removeEventListener('mousemove', this.handleDragMove);
    document.removeEventListener('mouseup', this.handleDragEnd);
  };

  handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { editing, previousValue } = this.state;
    const { minValue, maxValue, onChange, onDrag, disabled } = this.props;
    if (disabled || !editing) {
      return;
    }

    const targetValue = clamp(
      Number.parseFloat(event.target.value),
      minValue,
      maxValue,
    );
    if (Number.isNaN(targetValue)) {
      this.setState({
        editing: false,
      });
      return;
    }

    this.setState({
      editing: false,
      currentValue: targetValue,
      previousValue: targetValue,
    });
    if (previousValue !== targetValue) {
      onChange?.(targetValue);
      onDrag?.(targetValue);
    }
  };

  handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { minValue, maxValue, onChange, onDrag, disabled } = this.props;
    if (disabled) {
      return;
    }
    const { previousValue } = this.state;

    if (event.key === KEY.Enter) {
      const targetValue = clamp(
        Number.parseFloat(event.currentTarget.value),
        minValue,
        maxValue,
      );
      if (Number.isNaN(targetValue)) {
        this.setState({
          editing: false,
        });
        return;
      }

      this.setState({
        editing: false,
        currentValue: targetValue,
        previousValue: targetValue,
      });
      if (previousValue !== targetValue) {
        onChange?.(targetValue);
        onDrag?.(targetValue);
      }
    } else if (isEscape(event.key)) {
      this.setState({
        editing: false,
      });
    }
  };

  render() {
    const { dragging, editing, currentValue } = this.state;

    const {
      className,
      fluid,
      animated,
      unit,
      value,
      minValue,
      maxValue,
      height,
      width,
      lineHeight,
      fontSize,
      format,
    } = this.props;

    let displayValue = Number.parseFloat(value.toString());
    if (dragging) {
      displayValue = currentValue;
    }

    const contentElement = (
      <div className={styles.content}>
        {animated && !dragging ? (
          <AnimatedNumber value={displayValue} format={format} />
        ) : format ? (
          format(displayValue)
        ) : (
          displayValue
        )}

        {unit ? ` ${unit}` : ''}
      </div>
    );

    return (
      <Box
        className={classes([
          styles.numberInput,
          fluid && styles.fluid,
          className,
        ])}
        minWidth={width}
        minHeight={height}
        lineHeight={lineHeight}
        fontSize={fontSize}
        onMouseDown={this.handleDragStart}
      >
        <div className={styles.barContainer}>
          <div
            className={styles.bar}
            style={{
              height: `${clamp(
                ((displayValue - minValue) / (maxValue - minValue)) * 100,
                0,
                100,
              )}%`,
            }}
          />
        </div>
        {contentElement}
        <input
          ref={this.inputRef}
          className={styles.inner}
          style={{
            display: !editing ? 'none' : 'inline',
            height: height,
            lineHeight: lineHeight,
            fontSize: fontSize,
          }}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
        />
      </Box>
    );
  }
}
