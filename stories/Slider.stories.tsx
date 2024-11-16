import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Slider } from '../lib/components/Slider';

type StoryProps = ComponentProps<typeof Slider>;

export default {
  component: Slider,
  title: 'Components/Slider',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Slider',
  },
};
