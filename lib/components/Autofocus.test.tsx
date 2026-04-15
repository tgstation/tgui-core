import { afterEach, describe, expect, it, spyOn } from 'bun:test';
import { cleanup, render } from '@testing-library/react';
import { Autofocus } from './Autofocus';

describe('Autofocus Component', () => {
  afterEach(cleanup);

  it('renders children correctly', () => {
    const { getByText } = render(
      <Autofocus>
        <span>Test Child</span>
      </Autofocus>,
    );
    expect(getByText('Test Child')).toBeTruthy();
  });

  it('steals focus after mounting', async () => {
    const { container } = render(<Autofocus />);
    const div = container.querySelector('div')!;

    // initial state should not be focused (due to the 1ms timeout)
    expect(document.activeElement).not.toBe(div);

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(document.activeElement).toBe(div);
  });

  it('has tabIndex -1 to allow programmatic focus', () => {
    const { container } = render(<Autofocus />);
    const div = container.querySelector('div')!;
    expect(div.getAttribute('tabindex')).toBe('-1');
  });

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = spyOn(global, 'clearTimeout');
    const { unmount } = render(<Autofocus />);

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
