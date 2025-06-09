import { FitText } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof FitText>;

export default {
  component: FitText,
  title: 'Components/FitText',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'FitText',
  },
};
