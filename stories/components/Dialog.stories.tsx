import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Dialog } from '../../lib/components/Dialog';

type StoryProps = ComponentProps<typeof Dialog>;

export default {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Dialog',
  },
};
