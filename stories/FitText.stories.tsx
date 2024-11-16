import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { FitText } from '../lib/components/FitText';

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
