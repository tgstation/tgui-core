import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { MenuBar } from '../lib/components/MenuBar';

type StoryProps = ComponentProps<typeof MenuBar>;

export default {
  component: MenuBar,
  title: 'Components/MenuBar',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'MenuBar',
  },
};
