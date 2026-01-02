import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { Knob } from './Knob';

describe('Knob Component', () => {
  afterEach(cleanup);
  it('renders with initial value', () => {
    const { container } = render(
      <Knob value={50} minValue={0} maxValue={100} />,
    );
    const knob = container.querySelector('.Knob');
    expect(knob).toBeTruthy();
  });

  it('calls onChange when dragged', () => {
    let changedValue = 0;
    const { container } = render(
      <Knob
        value={50}
        minValue={0}
        maxValue={100}
        step={1}
        onChange={(_e, v) => {
          changedValue = v;
        }}
      />,
    );

    const knob = container.querySelector('.Knob')!;
    expect(knob).toBeTruthy();

    // simulate drag
    fireEvent.mouseDown(knob, { clientY: 50 });
    fireEvent.mouseMove(document, { clientY: 40 });
    fireEvent.mouseUp(document);

    expect(changedValue).not.toBe(0);
  });

  it('renders the cursor rotation correctly', () => {
    const { container } = render(
      <Knob value={75} minValue={0} maxValue={100} />,
    );
    const cursorBox = container.querySelector(
      '.Knob__cursorBox',
    ) as HTMLElement;
    expect(cursorBox).toBeTruthy();
    const transform = cursorBox.style.transform;
    expect(transform.includes('rotate')).toBe(true);
  });

  it('applies effective color from ranges', () => {
    const ranges: ComponentProps<typeof Knob>['ranges'] = {
      low: [0, 25],
      mid: [26, 75],
      high: [76, 100],
    };
    const { container } = render(
      <Knob value={50} minValue={0} maxValue={100} ranges={ranges} />,
    );
    const knob = container.querySelector('.Knob')!;
    expect(knob.className.includes('Knob--color--mid')).toBe(true);
  });
});
