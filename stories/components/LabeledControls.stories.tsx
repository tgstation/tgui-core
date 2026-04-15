import { Knob, LabeledControls, Slider } from '@components';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof LabeledControls>;

export default {
  component: LabeledControls,
  title: 'Components/LabeledControls',
  argTypes: {
    width: { control: 'number' },
    wrap: { control: 'boolean' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    width: 50,
  },
  render: (args) => {
    const [knobValue, setKnobValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(10);

    return (
      <LabeledControls {...args}>
        <LabeledControls.Item label="Label 1">
          <Knob
            minValue={0}
            maxValue={10}
            tickWhileDragging
            value={knobValue}
            onChange={(_e, v) => setKnobValue(v)}
          />
        </LabeledControls.Item>

        <LabeledControls.Item label="Label 2">
          <Slider
            tickWhileDragging
            value={sliderValue}
            onChange={(_e, v) => setSliderValue(v)}
            minValue={0}
            maxValue={20}
            width="200px"
          />
        </LabeledControls.Item>

        <LabeledControls.Item label="Label 3">
          <Knob
            minValue={0}
            maxValue={10}
            tickWhileDragging
            value={knobValue}
            onChange={(_e, v) => setKnobValue(v)}
          />
        </LabeledControls.Item>
      </LabeledControls>
    );
  },
};
