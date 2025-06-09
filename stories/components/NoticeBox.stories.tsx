import { COMPONENT_COLORS } from '@common/constants';
import { NoticeBox } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof NoticeBox>;

export default {
  component: NoticeBox,
  title: 'Components/NoticeBox',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'NoticeBox',
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <NoticeBox color={color} key={color}>
              {color || 'default'}
            </NoticeBox>
          ),
        )}
      </>
    );
  },
};
