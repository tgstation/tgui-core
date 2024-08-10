import { formatTime } from 'lib/common/format';
import { useEffect, useRef, useState } from 'react';

interface TimeDisplayProps {
  /** Whether the TimeDisplay should automatically increment or decrement */
  auto?: 'up' | 'down';
  /** An optional function to format the value */
  format?: (value: number) => string;
  /** The value that the TimeDisplay needs to render - if you pass a wrong type it will be rendered directly */
  value: number;
}

const isSafeNumber = (value: unknown): boolean => {
  return (
    typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value)
  );
};

export function TimeDisplay(props: TimeDisplayProps) {
  const {
    value: initialValue = 0,
    auto = undefined,
    format = undefined,
  } = props;
  const [currentValue, setCurrentValue] = useState<number>(() =>
    isSafeNumber(initialValue) ? initialValue : 0,
  );
  const [lastSeenValue, setLastSeenValue] = useState<number | undefined>(
    isSafeNumber(initialValue) ? initialValue : undefined,
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Manage the timer setup and cleanup
  useEffect(() => {
    console.log('auto', auto);
    if (auto !== undefined) {
      timerRef.current = setInterval(() => {
        const mod = auto === 'up' ? 10 : -10;
        setCurrentValue((prev) => Math.max(0, prev + mod));
      }, 1000); // every 1 s
    }

    // cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [auto]);

  // Handle updates to the value prop
  useEffect(() => {
    if (initialValue !== lastSeenValue) {
      setLastSeenValue(initialValue);
      setCurrentValue(initialValue);
    }
  }, [initialValue, lastSeenValue]);

  // Directly display weird stuff
  if (!isSafeNumber(initialValue)) {
    return initialValue || null;
  }

  return format ? format(currentValue) : formatTime(currentValue);
}
