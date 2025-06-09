import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Icon } from '../../lib/components';

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
