import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { InfinitePlane } from '../lib/components/InfinitePlane';

type StoryProps = ComponentProps<typeof InfinitePlane>;

export default {
  component: InfinitePlane,
  title: 'Components/InfinitePlane',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'InfinitePlane',
  },
};
