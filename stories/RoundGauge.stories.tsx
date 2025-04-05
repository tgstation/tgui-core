import type { Meta } from '@storybook/react';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import {
  Button,
  LabeledControls,
  RoundGauge,
  Section,
  Stack,
} from '../lib/components';

type StoryProps = ComponentProps<typeof RoundGauge>;
export default {
  component: RoundGauge,
  title: 'Components/RoundGauge',
} satisfies Meta<StoryProps>;

type PreviewProps = {
  ranges?: Record<string, [number, number]>;
} & PropsWithChildren;

function RoundGaugePreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { ranges } = props;

  return (
    <Stack.Item>
      <Section>
        <LabeledControls>
          <LabeledControls.Item label="Min">
            <Button
              fontSize={1.5}
              color={'transparent'}
              icon="angles-left"
              onClick={() => setValue(0)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="-10">
            <Button
              fontSize={1.5}
              color={'transparent'}
              icon="angle-left"
              onClick={() => setValue(value - 10)}
            />
          </LabeledControls.Item>
          <RoundGauge
            size={2.5}
            ranges={ranges || { primary: [0, 100] }}
            alertAfter={75}
            minValue={0}
            value={value}
            maxValue={100}
          />
          <LabeledControls.Item label="+10">
            <Button
              fontSize={1.5}
              color={'transparent'}
              icon="angle-right"
              onClick={() => setValue(value + 10)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="Max">
            <Button
              fontSize={1.5}
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
        <RoundGaugePreview />
      </Stack>
    );
  },
};

export const WithRanges = {
  render: () => {
    return (
      <Stack fill justify="center">
        <RoundGaugePreview
          ranges={{ good: [0, 50], average: [50, 75], bad: [75, 100] }}
        />
      </Stack>
    );
  },
};
