import { createRef, ReactElement, useEffect } from 'react';

type Props = {
  /** The excluded element that CAN be clicked */
  children: ReactElement<HTMLElement>;
  /** Callback that fires whenever the user clicks something else */
  onOutsideClick: () => void;
};

/**
 * ## TrackOutsideClicks
 *
 * Allows you to track when the user clicks outside of a specific element.
 *
 * Example:
 *
 * ```tsx
 * import { TrackOutsideClicks } from 'tgui-core/components';
 *
 * function MyComponent() {
 *  const [isOpen, setIsOpen] = useState(false);
 *
 *  return (
 *    <TrackOutsideClicks onOutsideClick={() => setIsOpen(false)}>
 *     <div>
 *       Hello world!
 *    </div>
 *   </TrackOutsideClicks>
 *  );
 * }
 * ```
 */
export function TrackOutsideClicks(props: Props) {
  const { children, onOutsideClick } = props;

  const ref = createRef<HTMLDivElement>();

  function handleOutsideClick(event: MouseEvent) {
    if (!(event.target instanceof Node)) {
      return;
    }

    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={ref} style={{ userSelect: 'none' }}>
      {children}
    </div>
  );
}
