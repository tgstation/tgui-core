import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Collapsible } from '../lib/components/Collapsible';

type StoryProps = ComponentProps<typeof Collapsible>;

export default {
  component: Collapsible,
  title: 'Components/Collapsible',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Collapsed content',
  },
};
