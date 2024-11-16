import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Stack } from '../lib/components/Stack';

type StoryProps = ComponentProps<typeof Stack>;

export default {
  component: Stack,
  title: 'Components/Stack',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Stack',
  },
};
