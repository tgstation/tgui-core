import { afterEach, describe, expect, it, mock } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { pxToRem } from 'tgui-core/common/math';
import { Dialog } from './Dialog';

describe('Dialog Component', () => {
  afterEach(cleanup);

  it('renders title and children correctly', () => {
    const { getByText } = render(
      <Dialog title="Test Title" onClose={() => {}}>
        <div>Test Content</div>
      </Dialog>,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Content')).toBeTruthy();
  });

it('calls onClose when the close button is clicked', () => {
    const handleClose = mock(() => {});
    const { container } = render(
      <Dialog title="Title" onClose={handleClose}>
        Content
      </Dialog>
    );

    const closeButton = container.querySelector('.Button');

    if (!closeButton) {
      throw new Error('Could not find the close button element');
    }

    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('applies custom width and height to the content box', () => {
    const { container } = render(
      <Dialog title="Title" onClose={() => {}} width="500px" height="200px">
        Content
      </Dialog>,
    );

    const contentBox = container.querySelector(
      '.Dialog__content',
    ) as HTMLElement;

    expect(contentBox.style.width).toBe(`${pxToRem(500, 'css')}`);
    expect(contentBox.style.height).toBe(`${pxToRem(200, 'css')}`);
  });

  it('uses default width of 370px if not provided', () => {
    const { container } = render(
      <Dialog title="Title" onClose={() => {}}>
        Content
      </Dialog>,
    );

    const contentBox = container.querySelector(
      '.Dialog__content',
    ) as HTMLElement;
    expect(contentBox.style.width).toBe(`${pxToRem(370, "css")}`);
  });
});

describe('Dialog.Button Component', () => {
  it('renders with children and calls onClick', () => {
    const handleClick = mock(() => {});
    const { getByText } = render(
      <Dialog.Button onClick={handleClick}>Confirm</Dialog.Button>,
    );

    const button = getByText('Confirm');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
