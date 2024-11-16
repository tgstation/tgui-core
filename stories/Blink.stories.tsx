import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Blink } from '../lib/components/Blink';

type StoryProps = ComponentProps<typeof Blink>;

export default {
  component: Blink,
  title: 'Components/Blink',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Blinking',
  },
};
