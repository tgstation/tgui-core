import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Image } from '../lib/components/Image';

type StoryProps = ComponentProps<typeof Image>;

export default {
  component: Image,
  title: 'Components/Image',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Image',
  },
};
