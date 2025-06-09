import { VirtualList } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

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
