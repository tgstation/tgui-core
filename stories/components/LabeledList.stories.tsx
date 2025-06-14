import { LabeledList } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof LabeledList>;

export default {
  component: LabeledList,
  title: 'Components/LabeledList',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => (
    <LabeledList>
      <LabeledList.Item label="Label 1">Value 1</LabeledList.Item>
      <LabeledList.Item label="Label 2">Value 2</LabeledList.Item>
      <LabeledList.Item label="Label 3">Value 3</LabeledList.Item>
    </LabeledList>
  ),
};
