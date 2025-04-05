import type { Meta } from '@storybook/react';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
import {
  Button,
  Knob,
  LabeledControls,
  Section,
  Stack,
} from '../lib/components';

type StoryProps = ComponentProps<typeof Knob>;
export default {
  component: Knob,
  title: 'Components/Knob',
} satisfies Meta<StoryProps>;

type PreviewProps = {
  color?: string;
} & PropsWithChildren;

function KnobPreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { color } = props;

  return (
    <Stack.Item key={color}>
      <Section>
        <LabeledControls>
          <LabeledControls.Item label="Min">
            <Button
              fontSize={2.5}
              color={'transparent'}
              icon="angles-left"
              onClick={() => setValue(0)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label={color || 'Default'}>
            <Knob
              size={2.5}
              color={color}
              minValue={0}
              value={value}
              maxValue={100}
              onChange={(_, v) => setValue(v)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="Max">
            <Button
              fontSize={2.5}
              color={'transparent'}
              icon="angles-right"
              onClick={() => setValue(100)}
            />
          </LabeledControls.Item>
        </LabeledControls>
      </Section>
    </Stack.Item>
  );
}

export const Default = {
  render: () => {
    return (
      <Stack fill justify="center">
        <KnobPreview />
      </Stack>
    );
  },
};

export const Colors = {
  render: () => {
    return (
      <Stack fill wrap g={1} justify="center">
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <KnobPreview key={color} color={color} />
          ),
        )}
      </Stack>
    );
  },
};
