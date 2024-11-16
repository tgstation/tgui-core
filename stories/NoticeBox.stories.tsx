import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { NoticeBox } from '../lib/components/NoticeBox';

type StoryProps = ComponentProps<typeof NoticeBox>;

export default {
  component: NoticeBox,
  title: 'Components/NoticeBox',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'NoticeBox',
  },
};
