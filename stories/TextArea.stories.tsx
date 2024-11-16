import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TextArea } from '../lib/components/TextArea';

type StoryProps = ComponentProps<typeof TextArea>;

export default {
  component: TextArea,
  title: 'Components/TextArea',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'TextArea',
  },
};
