import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { RoundGauge } from './RoundGauge';

describe('RoundGauge Component', () => {
  afterEach(cleanup);

  it('renders with a basic value and scales needle rotation', () => {
    const { container } = render(
      <RoundGauge value={50} minValue={0} maxValue={100} />,
    );

    const needle = container.querySelector('.RoundGauge__needle g');
    expect(needle?.getAttribute('transform')).toBe('rotate(0 50 50)');
  });

  it('clamps values outside the min/max range', () => {
    const { container } = render(
      <RoundGauge value={150} minValue={0} maxValue={100} />,
    );

    const needle = container.querySelector('.RoundGauge__needle g');
    expect(needle?.getAttribute('transform')).toBe('rotate(90 50 50)');
  });

  it('shows alert symbol when value exceeds alertAfter', () => {
    const { container } = render(
      <RoundGauge
        value={80}
        minValue={0}
        maxValue={100}
        alertAfter={70}
        ranges={{ danger: [70, 100] }}
      />,
    );

    const alertGroup = container.querySelector('.RoundGauge__alert');
    expect(alertGroup?.classList.contains('active')).toBe(true);
    expect(alertGroup?.classList.contains('RoundGauge__alert--danger')).toBe(
      true,
    );
  });

  it('correctly handles the alertBefore threshold', () => {
    // Value 10 is below alertBefore 20, should trigger alert
    const { container } = render(
      <RoundGauge value={10} alertBefore={20} ranges={{ low: [0, 20] }} />,
    );

    const alertGroup = container.querySelector('.RoundGauge__alert');
    expect(alertGroup?.classList.contains('active')).toBe(true);
  });

  it('calculates multiple range segments correctly', () => {
    const ranges: ComponentProps<typeof RoundGauge>['ranges'] = {
      low: [0, 25],
      high: [75, 100],
    };
    const { container } = render(
      <RoundGauge value={50} minValue={0} maxValue={100} ranges={ranges} />,
    );

    const rings = container.querySelectorAll('.RoundGauge__ringFill');
    expect(rings.length).toBe(2);

    const highRange = container.querySelector('.RoundGauge--color--high');
    expect(highRange?.getAttribute('transform')).toContain('rotate(315 50 50)');
  });

  it('renders the AnimatedNumber with the provided format function', () => {
    const format = (v: number) => `${v} units`;
    const { getByText } = render(<RoundGauge value={42} format={format} />);

    expect(getByText('42 units')).toBeTruthy();
  });
});
