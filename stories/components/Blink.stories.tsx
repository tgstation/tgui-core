import { Blink } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Blink>;

export default {
  component: Blink,
  title: 'Components/Blink',
  argTypes: {
    children: { control: 'text' },
    interval: { control: 'number' },
    time: { control: 'number' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Blinking',
    interval: 1000,
    time: 1000,
  },
};

export const FastBlink: Story = {
  args: {
    children: 'Fast Blink',
    interval: 300,
    time: 300,
  },
};

export const LongOffTime: Story = {
  args: {
    children: 'Long Off',
    interval: 500,
    time: 1500,
  },
};
