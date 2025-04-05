import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
import { Button, Section, Stack, Tabs } from '../lib/components';

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
      <Stack fill wrap vertical={!vertical} height={40}>
        <Stack.Item>
          <Tabs fill vertical={vertical}>
            {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
              (color) => (
                <Tabs.Tab
                  key={color}
                  color={color}
                  textAlign="center"
                  selected={selectAll || tab === color}
                  onClick={() => setTab(color)}
                >
                  {color || 'Default'}
                </Tabs.Tab>
              ),
            )}
          </Tabs>
        </Stack.Item>
        <Stack.Item grow>
          <Section
            fill
            title={`Vertical Tabs - Tab ${tab}`}
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
          >
            Selected tab: {tab}
          </Section>
        </Stack.Item>
      </Stack>
    );
  },
};
