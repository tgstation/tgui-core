import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TimeDisplay } from '../lib/components/TimeDisplay';

type StoryProps = ComponentProps<typeof TimeDisplay>;

export default {
  component: TimeDisplay,
  title: 'Components/TimeDisplay',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    value: 1,
  },
};
