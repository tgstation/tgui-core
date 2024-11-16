import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Icon } from '../lib/components/Icon';

type StoryProps = ComponentProps<typeof Icon>;

export default {
  component: Icon,
  title: 'Components/Icon',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Icon',
  },
};
