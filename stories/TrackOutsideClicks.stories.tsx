import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TrackOutsideClicks } from '../lib/components/TrackOutsideClicks';

type StoryProps = ComponentProps<typeof TrackOutsideClicks>;

export default {
  component: TrackOutsideClicks,
  title: 'Components/TrackOutsideClicks',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '250px', height: '250px' }}>
      <TrackOutsideClicks
        onOutsideClick={() => console.log('Clicked outside!')}
      >
        <div
          style={{
            backgroundColor: 'blue',
            height: '200px',
            width: '200px',
          }}
        >
          Click inside this box
        </div>
      </TrackOutsideClicks>
    </div>
  ),
};
