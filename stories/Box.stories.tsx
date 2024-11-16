import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Box } from '../lib/components/Box';

type StoryProps = ComponentProps<typeof Box>;

export default {
  component: Box,
  title: 'Components/Box',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Box',
  },
};
