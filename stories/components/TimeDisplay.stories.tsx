import { TimeDisplay } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

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
