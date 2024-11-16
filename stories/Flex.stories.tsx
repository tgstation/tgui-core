import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Flex } from '../lib/components/Flex';

type StoryProps = ComponentProps<typeof Flex>;

export default {
  component: Flex,
  title: 'Components/Flex',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Flex',
  },
};
