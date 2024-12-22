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

export const WithTw: Story = {
  args: {
    tw: 'bold italic mb-4 color-#fff fontSize-16px',
  },
  render: (args) => (
    <div>
      <Box {...args}>This is a box with tailwindish styling</Box>
      Bottom margined text
    </div>
  ),
};
