import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { LabeledList } from '../lib/components/LabeledList';

type StoryProps = ComponentProps<typeof LabeledList>;

export default {
  component: LabeledList,
  title: 'Components/LabeledList',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'LabeledList',
  },
};
