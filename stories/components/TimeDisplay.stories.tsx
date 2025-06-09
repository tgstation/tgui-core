import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { TimeDisplay } from '../../lib/components/TimeDisplay';

type StoryProps = ComponentProps<typeof TimeDisplay>;

export default {
  component: TimeDisplay,
  title: 'Components/TimeDisplay',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    value: 1,
  },
};
