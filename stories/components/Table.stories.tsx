import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Table } from '../../lib/components/Table';

type StoryProps = ComponentProps<typeof Table>;

export default {
  component: Table,
  title: 'Components/Table',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Table',
  },
};
