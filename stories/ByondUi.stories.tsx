import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { ByondUi } from '../lib/components/ByondUi';

type StoryProps = ComponentProps<typeof ByondUi>;

export default {
  component: ByondUi,
  title: 'Components/ByondUi',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'ByondUi',
  },
};
