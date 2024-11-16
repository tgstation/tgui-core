import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { ImageButton } from '../lib/components/ImageButton';

type StoryProps = ComponentProps<typeof ImageButton>;

export default {
  component: ImageButton,
  title: 'Components/ImageButton',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'ImageButton',
  },
};
