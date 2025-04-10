import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { RestrictedInput } from '../lib/components/RestrictedInput';

type StoryProps = ComponentProps<typeof RestrictedInput>;

export default {
  component: RestrictedInput,
  title: 'Components/RestrictedInput',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    console.log(value);

    return (
      <RestrictedInput
        value={value}
        onChange={(e, value) => setValue(value)}
        width={8}
      />
    );
  },
};
