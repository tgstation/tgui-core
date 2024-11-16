import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { KeyListener } from '../lib/components/KeyListener';

type StoryProps = ComponentProps<typeof KeyListener>;

export default {
  component: KeyListener,
  title: 'Components/KeyListener',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'KeyListener',
  },
};
