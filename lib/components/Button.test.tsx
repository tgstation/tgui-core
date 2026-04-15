import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { KEY } from 'tgui-core/common/keys';
import { Button } from './Button';

describe('Button Component', () => {
  afterEach(cleanup);

  it('renders children text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('calls onClick when clicked', () => {
    let clicked = false;

    const { getByText } = render(
      <Button onClick={() => (clicked = true)}>Click</Button>,
    );

    fireEvent.click(getByText('Click'));
    expect(clicked).toBe(true);
  });

  it('does not call onClick when disabled', () => {
    let clicked = false;

    const { getByText } = render(
      <Button disabled onClick={() => (clicked = true)}>
        Click
      </Button>,
    );

    fireEvent.click(getByText('Click'));
    expect(clicked).toBe(false);
  });

  it('fires onClick when pressing Enter', () => {
    let clicked = false;

    const { getByText } = render(
      <Button onClick={() => (clicked = true)}>Click</Button>,
    );

    const btn = getByText('Click');
    btn.focus();
    fireEvent.keyDown(btn, { key: KEY.Enter });

    expect(clicked).toBe(true);
  });

  it('fires onClick when pressing Space', () => {
    let clicked = false;

    const { getByText } = render(
      <Button onClick={() => (clicked = true)}>Click</Button>,
    );

    const btn = getByText('Click');
    btn.focus();
    fireEvent.keyDown(btn, { key: KEY.Space });

    expect(clicked).toBe(true);
  });
});

describe('Button.Checkbox Component', () => {
  it('renders checked and unchecked states', () => {
    const { rerender, container } = render(<Button.Checkbox checked />);

    expect(container.querySelector('.Button--selected')).toBeTruthy();

    rerender(<Button.Checkbox checked={false} />);
    expect(container.querySelector('.Button--selected')).toBeFalsy();
  });
});

describe('Button.Confirm Component', () => {
  it('requires two clicks to confirm', () => {
    let confirmed = false;

    const { getByText } = render(
      <Button.Confirm onClick={() => (confirmed = true)}>
        Delete
      </Button.Confirm>,
    );

    fireEvent.click(getByText('Delete'));
    expect(confirmed).toBe(false);

    fireEvent.click(getByText('Confirm?'));
    expect(confirmed).toBe(true);
  });
});

describe('Button.Input Component', () => {
  it('commits value on Enter', () => {
    let committed = '';

    const { container, getByText } = render(
      <Button.Input value="foo" onCommit={(v) => (committed = v)} />,
    );

    fireEvent.click(getByText('foo'));

    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: 'bar' } });
    fireEvent.keyDown(input, { key: KEY.Enter });

    expect(committed).toBe('bar');
  });

  it('cancels commit on Escape', () => {
    let committed = '';

    const { container, getByText } = render(
      <Button.Input value="bar" onCommit={(v) => (committed = v)} />,
    );

    fireEvent.click(getByText('bar'));

    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: 'bar' } });
    fireEvent.keyDown(input, { key: KEY.Escape });

    expect(committed).toBe('');
  });
});
