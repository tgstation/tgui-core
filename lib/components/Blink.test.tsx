import { afterEach, describe, expect, it, spyOn } from 'bun:test';
import { cleanup, render } from '@testing-library/react';
import { Blink } from './Blink';

describe('Blink Component', () => {
  afterEach(cleanup);

  it('renders children correctly', () => {
    const { getByText } = render(<Blink>Blinking Content</Blink>);
    expect(getByText('Blinking Content')).toBeTruthy();
  });

  it('initially renders with visible visibility', () => {
    const { getByText } = render(<Blink>Content</Blink>);
    const span = getByText('Content');
    expect(span.style.visibility).toBe('visible');
  });

  it('toggles visibility after the interval', async () => {
    const { getByText } = render(
      <Blink interval={50} time={50}>
        Content
      </Blink>
    );
    const span = getByText('Content');

    // wait for hidden
    await new Promise((resolve) => setTimeout(resolve, 60));
    expect(span.style.visibility).toBe('hidden');

    // and then unhide
    await new Promise((resolve) => setTimeout(resolve, 60));
    expect(span.style.visibility).toBe('visible');
  });

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = spyOn(global, 'clearInterval');
    const { unmount } = render(<Blink>Content</Blink>);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('restarts interval when props change', async () => {
    const { getByText, rerender } = render(
      <Blink interval={1000} time={1000}>
        Content
      </Blink>
    );
    const span = getByText('Content');

    rerender(
      <Blink interval={10} time={10}>
        Content
      </Blink>
    );

    await new Promise((resolve) => setTimeout(resolve, 15));
    expect(span.style.visibility).toBe('hidden');
  });
});
