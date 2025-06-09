import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Modal } from '../../lib/components/Modal';

type StoryProps = ComponentProps<typeof Modal>;

export default {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Modal',
  },
};
