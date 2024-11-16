import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Dropdown } from '../lib/components/Dropdown';

type StoryProps = ComponentProps<typeof Dropdown>;

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Dropdown',
  },
};
