import { clamp, isSafeNumber, toFixed } from '@common/math';
import { useEffect, useMemo, useRef, useState } from 'react';

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
/** Animated numbers are animated at roughly 60 frames per second. */
const SIXTY_HZ = 1_000.0 / 60.0;
/**
 * The exponential moving average coefficient. Larger values result in a faster
 * convergence.
 */
const Q = 0.8333;

/**
 * ## AnimatedNumber
 *
 * An animated number label. Shows a number, formatted with an optionally
 * provided function, and animates it towards its target value.
 */
export function AnimatedNumber(props: Props) {
  const { format, initial, value } = props;

  const tickHandle = useRef<number | null>(null);
  const lastTickTime = useRef<number | null>(null);

  const isSafe = initial !== undefined && isSafeNumber(initial);
  const [currentValue, setCurrentValue] = useState(
    isSafe ? initial : isSafeNumber(value) ? value : 0,
  );

  const targetPrecision = useMemo((): number => {
    if (!isSafeNumber(value)) return 0;
    const fraction = String(value).split('.')[1];
    const precision = fraction ? fraction.length : 0;
    return clamp(precision, 0, 8);
  }, [value]);

  /** Start ticking if value changes */
  useEffect(() => {
    if (currentValue !== value) {
      startTicking();
    }
    return () => stopTicking();
  }, [value]);

  const displayText = !isSafeNumber(value)
    ? String(value)
    : format
      ? format(currentValue)
      : toFixed(currentValue, targetPrecision);

  function startTicking(): void {
    if (tickHandle.current !== null) return;
    lastTickTime.current = null;
    tickHandle.current = requestAnimationFrame(tick);
  }

  function stopTicking(): void {
    if (tickHandle.current === null) return;
    cancelAnimationFrame(tickHandle.current);
    tickHandle.current = null;
    lastTickTime.current = null;
  }

  function tick(timestamp: number): void {
    tickHandle.current = null;

    if (!isSafeNumber(value)) {
      stopTicking();
      return;
    }

    const dt =
      lastTickTime.current === null
        ? SIXTY_HZ
        : timestamp - lastTickTime.current;
    lastTickTime.current = timestamp;

    const q = Q ** (dt / SIXTY_HZ);
    let shouldContinue = true;

    setCurrentValue((prev) => {
      const next = prev * q + value * (1 - q);

      if (Math.abs(value - next) < Math.max(EPSILON, EPSILON * value)) {
        shouldContinue = false;
        return value;
      }

      return next;
    });

    if (shouldContinue) {
      startTicking();
    }
  }

  return <span>{displayText}</span>;
}
