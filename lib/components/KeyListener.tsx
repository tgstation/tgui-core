import { useEffect } from 'react';
import type { KeyEvent } from '../common/events';
import { listenForKeyEvents } from '../common/hotkeys';

type Props = Partial<{
  onKey: (key: KeyEvent) => void;
  onKeyDown: (key: KeyEvent) => void;
  onKeyUp: (key: KeyEvent) => void;
}>;

/**
 * ## KeyListener
 *
 * A component that listens for keyboard events and calls the provided
 * callbacks.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-keylistener--docs)
 */
export function KeyListener(props: Props) {
  useEffect(() => {
    const dispose = listenForKeyEvents((key) => {
      if (props.onKey) {
        props.onKey(key);
      }

      if (key.isDown() && props.onKeyDown) {
        props.onKeyDown(key);
      }

      if (key.isUp() && props.onKeyUp) {
        props.onKeyUp(key);
      }
    });

    return () => {
      dispose();
    };
  }, []);

  return null;
}
