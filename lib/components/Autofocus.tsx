import { ReactNode, useEffect, useRef } from 'react';

type Props = Partial<{
  /** Optional child elements */
  children: ReactNode;
}>;

/**
 * ## Autofocus
 *
 * Used to force the window to steal focus on load. Children optional.
 */
export function Autofocus(props: Props) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.focus();
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} tabIndex={-1}>
      {children}
    </div>
  );
}
