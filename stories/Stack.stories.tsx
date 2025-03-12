import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Stack } from '../lib/components/Stack';

type StoryProps = ComponentProps<typeof Stack>;

export default {
  component: Stack,
  title: 'Components/Stack',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  render: () => (
    <Stack>
      <Stack.Item>Item 1</Stack.Item>
      <Stack.Item>Item 2</Stack.Item>
      <Stack.Item>Item 3</Stack.Item>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack vertical>
      <Stack.Item>Item 1</Stack.Item>
      <Stack.Item>Item 2</Stack.Item>
      <Stack.Item>Item 3</Stack.Item>
    </Stack>
  ),
};
