import { afterEach, describe, expect, it, mock, spyOn } from 'bun:test';
import * as hotkeys from '@common/hotkeys';
import { cleanup, render } from '@testing-library/react';

import { KeyListener } from './KeyListener';

mock.module('@common/hotkeys', () => ({
  listenForKeyEvents: (callback: (key: any) => void) => {
    (window as any).triggerKey = callback;
    return () => {
      (window as any).triggerKey = null;
    };
  },
}));

describe('KeyListener Component', () => {
  afterEach(cleanup);

  const createMockKey = (state: 'down' | 'up') => ({
    isDown: () => state === 'down',
    isUp: () => state === 'up',
  });

  it('subscribes to events on mount and unsubscribes on unmount', () => {
    const listenSpy = spyOn(hotkeys, 'listenForKeyEvents');

    const { unmount } = render(<KeyListener />);
    expect(listenSpy).toHaveBeenCalled();

    unmount();
    expect((window as any).triggerKey).toBeNull();
  });

  it('calls onKeyDown when a key is pressed', () => {
    const onKeyDown = mock(() => {});
    render(<KeyListener onKeyDown={onKeyDown} />);

    const mockKey = createMockKey('down');
    (window as any).triggerKey(mockKey);

    expect(onKeyDown).toHaveBeenCalledWith(mockKey);
  });

  it('calls onKeyUp when a key is released', () => {
    const onKeyUp = mock(() => {});
    render(<KeyListener onKeyUp={onKeyUp} />);

    const mockKey = createMockKey('up');
    (window as any).triggerKey(mockKey);

    expect(onKeyUp).toHaveBeenCalledWith(mockKey);
  });

  it('calls onKey for both up and down states', () => {
    const onKey = mock(() => {});
    render(<KeyListener onKey={onKey} />);

    (window as any).triggerKey(createMockKey('down'));
    (window as any).triggerKey(createMockKey('up'));

    expect(onKey).toHaveBeenCalledTimes(2);
  });
});
