import { describe, it } from 'bun:test';
import assert from 'node:assert';
import { fireEvent, render } from '@testing-library/react';
import { Knob } from './Knob';

describe('Knob Component', () => {
  it('renders with initial value', () => {
    const { container } = render(<Knob value={50} minValue={0} maxValue={100} />);
    const knob = container.querySelector('.Knob');
    assert(knob, 'Knob element should exist');
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
    assert(knob, 'Knob element should exist');

    // simulate drag
    fireEvent.mouseDown(knob, { clientY: 50 });
    fireEvent.mouseMove(document, { clientY: 40 });
    fireEvent.mouseUp(document);

    assert.notStrictEqual(changedValue, 0, 'onChange should have been called with a new value');
  });

  it('renders the cursor rotation correctly', () => {
    const { container } = render(<Knob value={75} minValue={0} maxValue={100} />);
    const cursorBox = container.querySelector('.Knob__cursorBox') as HTMLElement;
    assert(cursorBox, 'Cursor box should exist');
    const transform = cursorBox.style.transform;
    assert(transform.includes('rotate'), 'Cursor box should be rotated');
  });

  it('applies effective color from ranges', () => {
    const ranges: Record<string, [number, number]> = {
      low: [0, 25],
      mid: [26, 75],
      high: [76, 100],
    };
    const { container } = render(
      <Knob value={50} minValue={0} maxValue={100} ranges={ranges} />,
    );
    const knob = container.querySelector('.Knob')!;
    assert(knob.className.includes('Knob--color--mid'));
  });
});
