import { describe, it } from 'bun:test';
import assert from 'node:assert';
import { KEY } from '@common/keys';
import { fireEvent, render } from '@testing-library/react';
import { NumberInput } from './NumberInput.tsx';


describe('NumberInput Component', () => {
  it('renders initial value correctly', () => {
    const { getByText } = render(<NumberInput value={42} />);
    assert(getByText('42'));
  });

  it('calls onChange when Enter is pressed with a new value', () => {
    let changedValue = 0;
    const handleChange = (v: number) => {
      changedValue = v;
    };
    const { container } = render(
      <NumberInput value={10} onChange={handleChange} />,
    );

    const input = container.querySelector('input')!;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '25' } });
    fireEvent.keyDown(input, { key: KEY.Enter });

    assert.strictEqual(changedValue, 25);
    assert.strictEqual(input.value, '25');
  });

  it('clamps value to minValue and maxValue', () => {
    let changedValue = 0;
    const handleChange = (v: number) => {
      changedValue = v;
    };
    const { container } = render(
      <NumberInput
        value={50}
        minValue={10}
        maxValue={20}
        onChange={handleChange}
      />,
    );

    const input = container.querySelector('input')!;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.keyDown(input, { key: KEY.Enter });
    assert.strictEqual(changedValue, 10);

    fireEvent.change(input, { target: { value: '25' } });
    fireEvent.keyDown(input, { key: KEY.Enter });
    assert.strictEqual(changedValue, 20);
  });

  // Note we dont check the actual input value element here because it's never actually set. Value is a state/prop
  it('ignores input if disabled', () => {
    let changedValue = 0;
    const handleChange = (v: number) => {
      changedValue = v;
    };
    const { container } = render(
      <NumberInput value={5} disabled onChange={handleChange} />,
    );

    const input = container.querySelector('input')!;
    // attempt to change the value
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '100' } });
    fireEvent.keyDown(input, { key: KEY.Enter });

    // value should not have changed.
    fireEvent.blur(input); // triggers handleBlur
    assert.strictEqual(changedValue, 0);
  });

  it('resets editing state on Escape key', () => {
    const { container } = render(<NumberInput value={7} />);
    const input = container.querySelector('input')!;
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: KEY.Escape });
    assert.strictEqual(input.style.display, 'none');
  });
});
