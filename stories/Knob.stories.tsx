import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Knob } from '../lib/components/Knob';

type StoryProps = ComponentProps<typeof Knob>;

export default {
  component: Knob,
  title: 'Components/Knob',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Knob',
  },
};
