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
  render: () => (
    <Box>
      <Box style={{ border: 'thin solid red' }} px={5} py={5}>
        Item 1
      </Box>
      <Box style={{ border: 'thin solid blue' }}>Item 2</Box>
      <Box style={{ border: 'thin solid green' }}>Item 3</Box>
    </Box>
  ),
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
