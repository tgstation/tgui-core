import { afterEach, describe, expect, it, jest, spyOn } from 'bun:test';
import { act, cleanup, render } from '@testing-library/react';
import { AnimatedNumber } from './AnimatedNumber';

describe('AnimatedNumber Component', () => {
  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('renders initial value immediately', () => {
    const { getByText } = render(<AnimatedNumber value={100} />);
    expect(getByText('100')).toBeTruthy();
  });

  it('uses the initial prop if provided', () => {
    const { getByText } = render(<AnimatedNumber value={100} initial={50} />);
    expect(getByText('50')).toBeTruthy();
  });

  it('animates towards the target value', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<AnimatedNumber value={100} initial={0} />);

    expect(getByText('0')).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(50);
    });

    const element = getByText(/^[0-9.]+$/);
    const currentValue = parseFloat(element.textContent!);

    expect(currentValue).toBeGreaterThan(0);
    expect(currentValue).toBeLessThan(100);
  });

  it('converges to the target value', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<AnimatedNumber value={10} initial={9} />);

    act(() => {
      jest.advanceTimersByTime(1_000);
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

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = spyOn(global, 'clearInterval');
    const { unmount } = render(<AnimatedNumber value={100} initial={0} />);

    act(() => {
      unmount();
    });

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });

  it('handles non-safe numbers by displaying them as strings', () => {
    const { getByText } = render(<AnimatedNumber value={NaN} />);
    expect(getByText('NaN')).toBeTruthy();
  });
});
