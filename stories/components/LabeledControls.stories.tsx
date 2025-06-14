import { Knob, LabeledControls, Slider } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof LabeledControls>;

export default {
  component: LabeledControls,
  title: 'Components/LabeledControls',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    const [knobValue, setKnobValue] = useState(5);
    const [sliderValue, setSliderValue] = useState(10);

    return (
      <LabeledControls width={50}>
        <LabeledControls.Item label="Label 1">
          <Knob value={knobValue} onDrag={(e, v) => setKnobValue(v)} />
        </LabeledControls.Item>
        <LabeledControls.Item label="Label 2">
          <Slider
            value={sliderValue}
            onDrag={(e, v) => setSliderValue(v)}
            minValue={0}
            maxValue={20}
          />
        </LabeledControls.Item>
        <LabeledControls.Item label="Label 3">
          <Knob value={knobValue} onDrag={(e, v) => setKnobValue(v)} />
        </LabeledControls.Item>
      </LabeledControls>
    );
  },
};
