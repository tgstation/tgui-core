import { describe, it } from 'bun:test';
import assert from 'node:assert';
import { KEY } from '@common/keys';
import { act, fireEvent, render } from '@testing-library/react';
import { Input } from './Input.tsx';

describe('Input Component', () => {
  it('renders initial value', () => {
    const { getByDisplayValue } = render(<Input value="Hello" />);
    const input = getByDisplayValue('Hello') as HTMLInputElement;
    assert(input);
  });


it('updates innerValue and calls onChange when typing', async () => {
  let changedValue = '';
  const { container } = render(
    <Input value="" onChange={(v) => (changedValue = v)} expensive={false} />
  );
  const input = container.querySelector('input')!;

  await act(async () => {
    fireEvent.change(input, { target: { value: 'Test' } });
  });

  assert.strictEqual(input.value, 'Test');
  assert.strictEqual(changedValue, 'Test');
});

  it('calls onEnter when Enter is pressed', () => {
    let enteredValue = '';
    const { container } = render(
      <Input value="start" onEnter={(v) => (enteredValue = v)} />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Enter });

    assert.strictEqual(enteredValue, 'start');
    // input loses focus after Enter
    assert.notStrictEqual(document.activeElement, input);
  });

  it('calls onEscape when Escape is pressed', () => {
    let escapedValue = '';
    const { container } = render(
      <Input value="test" onEscape={(v) => (escapedValue = v)} />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Escape });

    assert.strictEqual(escapedValue, 'test');
    // input loses focus after Escape
    assert.notStrictEqual(document.activeElement, input);
  });

  it('clears value if selfClear is true on Enter', () => {
    const { container } = render(
      <Input value="abc" selfClear onEnter={() => {}} />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Enter });
    assert.strictEqual(input.value, '');
  });

  it('updates innerValue when props.value changes externally', () => {
    const { rerender, container } = render(<Input value="first" />);
    const input = container.querySelector('input')!;
    assert.strictEqual(input.value, 'first');

    rerender(<Input value="second" />);
    assert.strictEqual(input.value, 'second');
  });
});
