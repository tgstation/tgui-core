import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Popper } from '../lib/components/Popper';

type StoryProps = ComponentProps<typeof Popper>;

export default {
  component: Popper,
  title: 'Components/Popper',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Popper',
  },
};
