import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { AnimatedNumber } from '../lib/components/AnimatedNumber';

type StoryProps = ComponentProps<typeof AnimatedNumber>;

export default {
  component: AnimatedNumber,
  title: 'Components/AnimatedNumber',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    value: 69,
  },
};
