import { COMPONENT_COLORS } from '@common/constants';
import { NoticeBox } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof NoticeBox>;

export default {
  component: NoticeBox,
  title: 'Components/NoticeBox',
  argTypes: {
    children: { control: 'text' },
    color: {
      control: 'select',
      options: [
        undefined,
        ...COMPONENT_COLORS.states,
        ...COMPONENT_COLORS.spectrum,
      ],
    },
    info: { control: 'boolean' },
    success: { control: 'boolean' },
    danger: { control: 'boolean' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  args: {
    children: 'NoticeBox',
  },
};

export const BaseTypes: Story = {
  render: () => (
    <>
      <NoticeBox info>Info notice</NoticeBox>
      <NoticeBox success>Success notice</NoticeBox>
      <NoticeBox danger>Danger notice</NoticeBox>
      <NoticeBox>Default notice</NoticeBox>
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
        (color) => (
          <NoticeBox color={color} key={color}>
            {color || 'default'}
          </NoticeBox>
        ),
      )}
    </>
  ),
};
