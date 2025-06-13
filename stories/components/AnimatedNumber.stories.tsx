import { AnimatedNumber, Button, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof AnimatedNumber>;

export default {
  component: AnimatedNumber,
  title: 'Components/AnimatedNumber',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

function getRandom() {
  return Math.round(Math.random() * 100 * 100) / 100;
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Stack>
        <Stack.Item>
          <Button onClick={() => setValue(getRandom())}>Change Value</Button>
        </Stack.Item>
        <Stack.Item>
          <AnimatedNumber value={value} />
        </Stack.Item>
      </Stack>
    );
  },
};
