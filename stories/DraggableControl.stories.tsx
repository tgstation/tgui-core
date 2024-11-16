import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { DraggableControl } from '../lib/components/DraggableControl';

type StoryProps = ComponentProps<typeof DraggableControl>;

export default {
  component: DraggableControl,
  title: 'Components/DraggableControl',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'DraggableControl',
  },
};
