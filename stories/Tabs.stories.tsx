import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Tabs } from '../lib/components/Tabs';

type StoryProps = ComponentProps<typeof Tabs>;

export default {
  component: Tabs,
  title: 'Components/Tabs',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Tabs',
  },
};
