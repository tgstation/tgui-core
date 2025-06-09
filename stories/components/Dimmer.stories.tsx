import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Dimmer } from '../../lib/components/Dimmer';

type StoryProps = ComponentProps<typeof Dimmer>;

export default {
  component: Dimmer,
  title: 'Components/Dimmer',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Dimmer',
  },
};
