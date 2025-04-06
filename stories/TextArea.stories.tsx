import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Stack } from '../lib/components';
import { TextArea } from '../lib/components/TextArea';

type StoryProps = ComponentProps<typeof TextArea>;

export default {
  component: TextArea,
  title: 'Components/TextArea',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <Stack fill g={2} mt={5} justify="center" vertical>
        <Stack.Item>
          <TextArea width={10} height={5} scrollbar />
        </Stack.Item>
        <Stack.Item>
          <TextArea width={20} height={10} />
        </Stack.Item>
        <Stack.Item>
          <TextArea width={30} height={15} scrollbar />
        </Stack.Item>
      </Stack>
    );
  },
};
