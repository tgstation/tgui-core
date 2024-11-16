import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { LabeledControls } from '../lib/components/LabeledControls';

type StoryProps = ComponentProps<typeof LabeledControls>;

export default {
  component: LabeledControls,
  title: 'Components/LabeledControls',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'LabeledControls',
  },
};
