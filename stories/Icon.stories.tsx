import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'lib/components';
import type { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Icon>;

export default {
  component: Icon,
  title: 'Components/Icon',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    name: 'question',
  },
};
