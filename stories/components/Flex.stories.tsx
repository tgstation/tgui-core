import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Flex } from '../../lib/components/Flex';

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
