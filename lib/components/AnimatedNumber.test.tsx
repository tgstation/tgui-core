import { describe, expect, it, spyOn } from 'bun:test';
import { act, render } from '@testing-library/react';
import { AnimatedNumber } from './AnimatedNumber';

async function advanceRafFrames(frames: number): Promise<void> {
  for (let i = 0; i < frames; i++) {
    await new Promise((resolve) => {
      requestAnimationFrame(resolve);
    });
  }
}

describe('AnimatedNumber Component', () => {
  it('renders initial value immediately', () => {
    const { getByText } = render(<AnimatedNumber value={100} />);
    expect(getByText('100')).toBeTruthy();
  });

  it('uses the initial prop if provided', () => {
    const { getByText } = render(<AnimatedNumber value={100} initial={50} />);
    expect(getByText('50')).toBeTruthy();
  });

  it('converges to the target value', async () => {
    const { getByText } = render(<AnimatedNumber value={10} initial={9} />);

    await act(async () => {
      await advanceRafFrames(1);
    });

    expect(getByText('10')).toBeTruthy();
  });

  it('uses custom format function', () => {
    const format = (v: number) => `$${v.toFixed(2)}`;
    const { getByText } = render(
      <AnimatedNumber value={50} initial={50} format={format} />,
    );
    expect(getByText('$50.00')).toBeTruthy();
  });

  it('matches the numeric precision of the target value', () => {
    const { getByText } = render(
      <AnimatedNumber value={10.55} initial={10.55} />,
    );
    expect(getByText('10.55')).toBeTruthy();
  });

  it('cleans up animation frame on unmount', async () => {
    const cancelAnimationFrameSpy = spyOn(globalThis, 'cancelAnimationFrame');
    const { unmount } = render(<AnimatedNumber value={100} initial={0} />);

    // Flush effects so the component schedules its first frame,
    // then immediately unmount before the RAF callback runs.
    await act(async () => {
      await advanceRafFrames(1);
      unmount();
    });

    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
    cancelAnimationFrameSpy.mockRestore();
  });

  it('handles non-safe numbers by displaying them as strings', () => {
    const { getByText } = render(<AnimatedNumber value={NaN} />);
    expect(getByText('NaN')).toBeTruthy();
  });
});
