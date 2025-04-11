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

    return (
      <RestrictedInput
        value={value}
        onChange={(value) => setValue(value)}
        width={8}
      />
    );
  },
};

export const WithFloats: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);

    return (
      <RestrictedInput
        allowFloats
        value={value}
        onChange={(value) => setValue(value)}
        width={8}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return <RestrictedInput value={1} disabled />;
  },
};

export const SendParentValue: Story = {
  render: () => {
    const value = 1;

    return (
      <RestrictedInput
        value={value}
        onChange={(value) => console.log(value)}
        width={8}
      />
    );
  },
};
