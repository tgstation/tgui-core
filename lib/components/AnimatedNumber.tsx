import { clamp, isSafeNumber, toFixed } from '@common/math';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** The target value to approach. */
  value: number;
} & Partial<{
  /**
   * If provided, a function that formats the inner string. By default,
   * attempts to match the numeric precision of `value`.
   */
  format: (value: number) => string;
  /**
   * If provided, the initial value displayed. By default, the same as `value`.
   * If `initial` and `value` are different, the component immediately starts
   * animating.
   */
  initial: number;
}>;

/** A small number. */
const EPSILON = 10e-4;

/**
 * The exponential moving average coefficient. Larger values result in a faster
 * convergence.
 */
const Q = 0.8333;

/** Animated numbers are animated at roughly 60 frames per second. */
const SIXTY_HZ = 1_000.0 / 60.0;

/**
 * ## AnimatedNumber
 *
 * An animated number label. Shows a number, formatted with an optionally
 * provided function, and animates it towards its target value.
 */
export function AnimatedNumber(props: Props) {
  const { format, initial, value } = props;

  const interval = useRef<NodeJS.Timeout | null>(null);

  const isSafe = initial !== undefined && isSafeNumber(initial);
  const [currentValue, setCurrentValue] = useState(
    isSafe ? initial : isSafeNumber(value) ? value : 0,
  );

  /** Start ticking if value changes */
  useEffect(() => {
    if (currentValue !== value) {
      startTicking();
    }
    return () => stopTicking();
  }, [value]);

  /** Cleanup any intervals */
  useEffect(() => {
    return () => stopTicking();
  }, []);

  /** Compute the display string for the current value */
  const displayText = !isSafeNumber(value)
    ? String(value)
    : format
      ? format(currentValue)
      : getPrecise();

  /** Formats the current value to match the precision of `value`. */
  function getPrecise(): string {
    const fraction = String(value).split('.')[1];
    const precision = fraction ? fraction.length : 0;

    return toFixed(currentValue, clamp(precision, 0, 8));
  }

  /** Starts animating the inner span. If already animating, does nothing. */
  function startTicking(): void {
    if (interval.current !== null) return;
    interval.current = setInterval(tick, SIXTY_HZ);
  }

  /** Stops animating the inner span. */
  function stopTicking(): void {
    if (interval.current === null) return;
    clearInterval(interval.current);
    interval.current = null;
  }

  /** Steps forward one frame. */
  function tick(): void {
    if (!isSafeNumber(value)) {
      stopTicking();
      return;
    }

    setCurrentValue((prev): number => {
      const next = prev * Q + value * (1 - Q);
      const isOver =
        Math.abs(value - next) < Math.max(EPSILON, EPSILON * value);

      if (isOver) {
        stopTicking();
        return value;
      }

      return next;
    });
  }

  return <span>{displayText}</span>;
}
