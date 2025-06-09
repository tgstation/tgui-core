import type { ComponentProps } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { COMPONENT_COLORS } from '../../lib/common/constants';
import { Button, Section, Stack, Tabs } from '../../lib/components';

type StoryProps = ComponentProps<typeof Tabs>;

export default {
  component: Tabs,
  title: 'Components/Tabs',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render() {
    const [vertical, setVertical] = useState(true);
    const [selectAll, setSelectAll] = useState(false);
    const [tab, setTab] = useState('');

    return (
      <Stack fill height={40} vertical={!vertical} wrap>
        <Stack.Item>
          <Tabs fill vertical={vertical}>
            {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
              (color) => (
                <Tabs.Tab
                  color={color}
                  key={color}
                  onClick={() => setTab(color)}
                  selected={selectAll || tab === color}
                  textAlign="center"
                >
                  {color || 'Default'}
                </Tabs.Tab>
              ),
            )}
          </Tabs>
        </Stack.Item>
        <Stack.Item grow>
          <Section
            buttons={
              <>
                <Button.Checkbox
                  checked={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                >
                  Select all
                </Button.Checkbox>
                <Button.Checkbox
                  checked={vertical}
                  onClick={() => setVertical(!vertical)}
                >
                  Vertical
                </Button.Checkbox>
              </>
            }
            fill
            title={`Vertical Tabs - Tab ${tab}`}
          >
            Selected tab: {tab}
          </Section>
        </Stack.Item>
      </Stack>
    );
  },
};
