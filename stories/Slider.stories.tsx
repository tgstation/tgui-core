import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Slider } from '../lib/components/Slider';

type StoryProps = ComponentProps<typeof Slider>;

export default {
  component: Slider,
  title: 'Components/Slider',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div style={{ width: '100px' }}>
          <Slider
            maxValue={100}
            minValue={0}
            value={value}
            step={1}
            onChange={(_, value) => setValue(value)}
          />
        </div>
      </div>
    );
  },
};
