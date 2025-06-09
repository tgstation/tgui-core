import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Popper } from '../../lib/components/Popper';

type StoryProps = ComponentProps<typeof Popper>;

export default {
  component: Popper,
  title: 'Components/Popper',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Popper',
  },
};
