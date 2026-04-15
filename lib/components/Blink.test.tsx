import { afterEach, describe, expect, it, jest, spyOn } from 'bun:test';
import { act, cleanup, render } from '@testing-library/react';
import { Blink } from './Blink';

// why must setTimeout plague me...
describe('Blink Component', () => {
  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Blink>Blinking Content</Blink>);
    expect(getByText('Blinking Content')).toBeTruthy();
  });

  it('initially renders with visible visibility', () => {
    const { getByText } = render(<Blink>Content</Blink>);
    const span = getByText('Content');
    expect(span.style.visibility).toBe('visible');
  });

  it('toggles visibility after the interval', () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <Blink interval={50} time={50}>
        Content
      </Blink>,
    );
    const span = getByText('Content');
    // wait for hidden
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(span.style.visibility).toBe('hidden');

    // and then unhide
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(span.style.visibility).toBe('visible');
  });

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = spyOn(global, 'clearInterval');
    const { unmount } = render(<Blink>Content</Blink>);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('restarts interval when props change', () => {
    jest.useFakeTimers();
    const { getByText, rerender } = render(
      <Blink interval={1000} time={1000}>
        Content
      </Blink>,
    );
    const span = getByText('Content');

    act(() => {
      rerender(
        <Blink interval={10} time={10}>
          Content
        </Blink>,
      );
    });

    act(() => {
      jest.advanceTimersByTime(20);
    });
    expect(span.style.visibility).toBe('hidden');
  });
});
