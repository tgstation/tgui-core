import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
import { NoticeBox } from '../lib/components/NoticeBox';

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
            <NoticeBox key={color} color={color}>
              {color || 'default'}
            </NoticeBox>
          ),
        )}
      </>
    );
  },
};
