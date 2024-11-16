import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { RoundGauge } from '../lib/components/RoundGauge';

type StoryProps = ComponentProps<typeof RoundGauge>;

export default {
  component: RoundGauge,
  title: 'Components/RoundGauge',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'RoundGauge',
  },
};
