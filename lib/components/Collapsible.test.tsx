import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Collapsible } from './Collapsible';

describe('Collapsible Component', () => {
  afterEach(cleanup);

  it('renders with title and is closed by default', () => {
    const { getByText, queryByText } = render(
      <Collapsible title="Toggle Me">
        <p>Hidden Content</p>
      </Collapsible>,
    );

    expect(getByText('Toggle Me')).toBeTruthy();
    expect(queryByText('Hidden Content')).toBeFalsy();
  });

  it('opens and shows content when clicked', () => {
    const { getByText, queryByText } = render(
      <Collapsible title="Toggle Me">
        <p>Hidden Content</p>
      </Collapsible>,
    );

    const button = getByText('Toggle Me');
    fireEvent.click(button);

    expect(queryByText('Hidden Content')).toBeTruthy();
  });

  it('respects the initial open prop', () => {
    const { queryByText } = render(
      <Collapsible title="Title" open>
        <p>Visible Content</p>
      </Collapsible>,
    );

    expect(queryByText('Visible Content')).toBeTruthy();
  });

  it('renders extra buttons if provided', () => {
    const { getByText } = render(
      <Collapsible title="Title" buttons={<button>Extra</button>} />,
    );

    expect(getByText('Extra')).toBeTruthy();
  });

  it('changes the chevron icon based on open state', () => {
    const { container, getByText } = render(<Collapsible title="Toggle Me" />);

    const button = getByText('Toggle Me');
    const icon = container.querySelector('.fa-chevron-right');
    expect(icon).toBeTruthy();

    fireEvent.click(button);

    const openIcon = container.querySelector('.fa-chevron-down');
    expect(openIcon).toBeTruthy();
  });

  it('renders a custom icon if provided instead of chevron', () => {
    const { container } = render(<Collapsible title="Title" icon="star" />);

    expect(container.querySelector('.fa-star')).toBeTruthy();
    expect(container.querySelector('.fa-chevron-right')).toBeFalsy();
  });

  it('renders sideIcon if provided', () => {
    const { container } = render(<Collapsible title="Title" sideIcon="cog" />);

    expect(container.querySelector('.fa-cog')).toBeTruthy();
  });
});
