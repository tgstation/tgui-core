import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Input } from '../lib/components/Input';

type StoryProps = ComponentProps<typeof Input>;

export default {
  component: Input,
  title: 'Components/Input',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Input',
  },
};
