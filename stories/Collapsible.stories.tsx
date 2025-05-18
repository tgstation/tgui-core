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

export const StyledChild: Story = {
  args: {
    child_mt: -0.1,
    children: 'Collapsed content',
    childStyles: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0 0 0.25em 0.25em',
      color: 'red',
      padding: '0.5em',
    },
    title: 'Click me',
  },
};
