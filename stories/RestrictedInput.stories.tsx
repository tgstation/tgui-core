import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'lib/components/Button';
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

export const Fluid: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        fluid
        value={value}
        onChange={(value) => setValue(value)}
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
        maxValue={3}
      />
    );
  },
};

export const SendParentValue: Story = {
  render: () => {
    const [parentValue, setParentValue] = useState(5);

    return (
      <>
        <Button onClick={() => setParentValue(0)}>Min</Button>
        <RestrictedInput
          value={parentValue}
          onChange={(value) => setParentValue(value)}
          width={8}
        />
        <Button onClick={() => setParentValue(103000)}>Max</Button>
      </>
    );
  },
};

export const AutoSelect: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        autoSelect
        value={value}
        onChange={(value) => setValue(value)}
      />
    );
  },
};
