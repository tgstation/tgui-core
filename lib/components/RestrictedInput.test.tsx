import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
  mock,
  spyOn,
} from 'bun:test';
import { KEY } from '@common/keys';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { RestrictedInput } from './RestrictedInput';

describe('RestrictedInput Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  it('renders with initial value', () => {
    render(<RestrictedInput value={50} />);
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(input.value).toBe('50');
  });

  it('renders with minValue when no value is provided', () => {
    render(<RestrictedInput minValue={10} />);
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(input.value).toBe('10');
  });

  it('calls onChange immediately when not expensive', () => {
    const onChange = mock();
    const { getByRole } = render(<RestrictedInput onChange={onChange} />);
    const input = getByRole('spinbutton');

    fireEvent.change(input, { target: { value: '100' } });
    expect(onChange).toHaveBeenCalledWith(100, expect.anything());
  });

  it('debounces onChange when expensive prop is true (default 250ms)', () => {
    const onChange = mock();
    const { getByRole } = render(
      <RestrictedInput expensive onChange={onChange} />,
    );
    const input = getByRole('spinbutton');

    fireEvent.change(input, { target: { value: '100' } });

    expect(onChange).not.toHaveBeenCalled(); // debounce has not happened

    act(() => {
      jest.advanceTimersByTime(250); // now it should have happened
    });
    expect(onChange).toHaveBeenCalledWith(100, expect.anything());
  });

  it('debounces onChange when expensive prop is true (custom 550ms)', () => {
    const onChange = mock();
    const { getByRole } = render(
      <RestrictedInput expensive={500} onChange={onChange} />,
    );
    const input = getByRole('spinbutton');

    fireEvent.change(input, { target: { value: '100' } });

    expect(onChange).not.toHaveBeenCalled(); // debounce has not happened

    // sanity check :3
    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(onChange).not.toHaveBeenCalled(); // still should not have happened

    act(() => {
      jest.advanceTimersByTime(250); // now it should have happened
    });
    expect(onChange).toHaveBeenCalledWith(100, expect.anything());
  });

  it('toggles negative value when Minus key is pressed', () => {
    const { getByRole } = render(<RestrictedInput value={50} />);
    const input = getByRole('spinbutton');

    fireEvent.keyDown(input, { key: '-' });
    expect((input as HTMLInputElement).value).toBe('-50');
  });

  it('calls onEnter and blurs when Enter key is pressed', () => {
    const onEnter = mock();
    const { getByRole } = render(
      <RestrictedInput value={50} onEnter={onEnter} />,
    );
    const input = getByRole('spinbutton');

    const blurSpy = spyOn(input, 'blur');

    fireEvent.keyDown(input, { key: KEY.Enter });

    expect(onEnter).toHaveBeenCalledWith(50, expect.anything());
    expect(blurSpy).toHaveBeenCalled();
  });

  it('calls onEscape and blurs when Escape key is pressed', () => {
    const onEscape = mock();
    const { getByRole } = render(
      <RestrictedInput value={50} onEscape={onEscape} />,
    );
    const input = getByRole('spinbutton');

    fireEvent.keyDown(input, { key: KEY.Escape });

    expect(onEscape).toHaveBeenCalledWith(50, expect.anything());
  });

  it('validates min/max constraints and triggers onValidationChange', () => {
    const onValidationChange = mock();
    const { getByRole } = render(
      <RestrictedInput
        minValue={0}
        maxValue={10}
        onValidationChange={onValidationChange}
      />,
    );
    const input = getByRole('spinbutton') as HTMLInputElement;

    // this exceeds the max, it should be marked as invalid.
    fireEvent.change(input, { target: { value: '15' } });

    expect(input.classList.contains('RestrictedInput--invalid')).toBe(true);
    expect(onValidationChange).toHaveBeenCalledWith(false);
  });

  it('handles autoFocus on mount', () => {
    const { getByRole } = render(<RestrictedInput autoFocus />);
    const input = getByRole('spinbutton');

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(document.activeElement).toBe(input);
  });
});
