import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
  mock,
} from 'bun:test';
import { KEY } from '@common/keys';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { Input } from './Input.tsx';

describe('Input Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('renders initial value', () => {
    const { getByDisplayValue } = render(<Input value="Hello" />);
    const input = getByDisplayValue('Hello') as HTMLInputElement;
    expect(input).toBeTruthy();
  });

  it('updates innerValue and calls onChange when typing', async () => {
    let changedValue = '';
    const { container } = render(
      <Input
        value=""
        onChange={(v) => {
          changedValue = v;
        }}
        expensive={false}
      />,
    );
    const input = container.querySelector('input')!;

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Test' } });
    });

    expect(input.value).toBe('Test');
    expect(changedValue).toBe('Test');
  });

  it('debounces onChange when expensive prop is true (default 250ms)', () => {
    const onChange = mock();
    const { container } = render(<Input expensive={500} onChange={onChange} />);
    const input = container.querySelector('input')!;

    fireEvent.change(input, { target: { value: '100' } });

    expect(onChange).not.toHaveBeenCalled(); // debounce has not happened

    act(() => {
      jest.advanceTimersByTime(550); // now it should have happened
    });
    expect(onChange).toHaveBeenCalledWith('100', expect.anything());
  });

  it('debounces onChange when expensive prop is true (custom 500ms)', () => {
    const onChange = mock();
    const { container } = render(<Input expensive={500} onChange={onChange} />);
    const input = container.querySelector('input')!;

    fireEvent.change(input, { target: { value: '100' } });

    expect(onChange).not.toHaveBeenCalled(); // debounce has not happened

    // sanity check :3
    act(() => {
      jest.advanceTimersByTime(280);
    });

    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(280); // now it should have happened
    });
    expect(onChange).toHaveBeenCalledWith('100', expect.anything());
  });

  it('calls onEnter when Enter is pressed', () => {
    let enteredValue = '';
    const { container } = render(
      <Input
        value="start"
        onEnter={(v) => {
          enteredValue = v;
        }}
      />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Enter });

    expect(enteredValue).toBe('start');
    // input loses focus after Enter
    expect(document.activeElement).not.toBe(input);
  });

  it('calls onEscape when Escape is pressed', () => {
    let escapedValue = '';
    const { container } = render(
      <Input
        value="test"
        onEscape={(v) => {
          escapedValue = v;
        }}
      />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Escape });

    expect(escapedValue).toBe('test');
    // input loses focus after Escape
    expect(document.activeElement).not.toBe(input);
  });

  it('clears value if selfClear is true on Enter', () => {
    const { container } = render(
      <Input value="abc" selfClear onEnter={() => {}} />,
    );
    const input = container.querySelector('input')!;
    fireEvent.keyDown(input, { key: KEY.Enter });
    expect(input.value).toBe('');
  });

  it('updates innerValue when props.value changes externally', () => {
    const { rerender, container } = render(<Input value="first" />);
    const input = container.querySelector('input')!;
    expect(input.value).toBe('first');

    rerender(<Input value="second" />);
    expect(input.value).toBe('second');
  });
});
