import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { NumberInput } from '../../lib/components/NumberInput';

type StoryProps = ComponentProps<typeof NumberInput>;

export default {
  component: NumberInput,
  title: 'Components/NumberInput',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    value: 1,
  },
};
