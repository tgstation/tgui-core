import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { FakeTerminal } from '../lib/components/FakeTerminal';

type StoryProps = ComponentProps<typeof FakeTerminal>;

export default {
  component: FakeTerminal,
  title: 'Components/FakeTerminal',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'FakeTerminal',
  },
};
