import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { VirtualList } from '../../lib/components/VirtualList';

type StoryProps = ComponentProps<typeof VirtualList>;

export default {
  component: VirtualList,
  title: 'Components/VirtualList',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'VirtualList',
  },
};
