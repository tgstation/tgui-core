import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { BlockQuote } from '../lib/components/BlockQuote';

type StoryProps = ComponentProps<typeof BlockQuote>;

export default {
  component: BlockQuote,
  title: 'Components/BlockQuote',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Quote Block',
  },
};
