import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Tooltip } from '../lib/components/Tooltip';

type StoryProps = ComponentProps<typeof Tooltip>;

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Tooltip content="Tooltip">
          <div>Hover me</div>
        </Tooltip>
      </div>
    );
  },
};
