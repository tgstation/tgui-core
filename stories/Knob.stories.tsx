import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Knob } from '../lib/components/Knob';

type StoryProps = ComponentProps<typeof Knob>;

export default {
  component: Knob,
  title: 'Components/Knob',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div style={{ width: '300px' }}>
          <Knob
            value={value}
            onChange={(_, value) => setValue(value)}
            minValue={0}
            maxValue={100}
          />
        </div>
      </div>
    );
  },
};
