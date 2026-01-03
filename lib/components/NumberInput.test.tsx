import { afterEach, describe, expect, it } from 'bun:test';
import { KEY } from '@common/keys';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { NumberInput } from './NumberInput.tsx';

describe('NumberInput Component', () => {
  afterEach(cleanup);

  it('renders initial value correctly', () => {
    const { getByText } = render(<NumberInput value={42} />);
    expect(getByText('42')).toBeTruthy();
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

    expect(changedValue).toBe(25);
    expect(input.value).toBe('25');
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
    expect(changedValue).toBe(10);

    fireEvent.change(input, { target: { value: '25' } });
    fireEvent.keyDown(input, { key: KEY.Enter });
    expect(changedValue).toBe(20);
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
    expect(changedValue).toBe(0);
  });

  it('resets editing state on Escape key', () => {
    const { container } = render(<NumberInput value={7} />);
    const input = container.querySelector('input')!;
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: KEY.Escape });
    expect(input.style.display).toBe('none');
  });
});
