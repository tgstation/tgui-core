import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { ProgressBar } from '../lib/components/ProgressBar';

type StoryProps = ComponentProps<typeof ProgressBar>;

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'ProgressBar',
  },
};
