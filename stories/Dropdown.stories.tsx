import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';

import { Box } from '../lib/components/Box';
import { Dropdown } from '../lib/components/Dropdown';
import { Stack } from '../lib/components/Stack';

type StoryProps = ComponentProps<typeof Dropdown>;

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

const defaultItems: any[] = [];

for (let i = 0; i < 15; i++) {
  defaultItems.push({
    value: `item-${i}`,
    displayText: `Item ${i}`,
  });
}

type ShowcaseProps = {
  title: string;
} & PropsWithChildren;

function Showcase(props: ShowcaseProps) {
  const { title, children } = props;
  return (
    <Stack.Item mr={4}>
      {title}
      <Box mb={4} />
      {children}
    </Stack.Item>
  );
}

function DropdownStories() {
  const [selected, setSelected] = useState('');

  const displayText = selected
    ? defaultItems.find((item) => item.value === selected)?.displayText
    : 'Dropdown';

  return (
    <Stack>
      <Showcase title="Default">
        <Dropdown
          displayText={displayText}
          options={defaultItems}
          onSelected={setSelected}
          selected={selected}
        />
      </Showcase>
      <Showcase title="Over">
        <Dropdown
          over
          displayText={displayText}
          options={defaultItems}
          onSelected={setSelected}
          selected={selected}
        />
      </Showcase>
      <Showcase title="Buttons">
        <Dropdown
          buttons
          displayText={displayText}
          options={defaultItems}
          onSelected={setSelected}
          selected={selected}
        />
      </Showcase>
      <Showcase title="Disabled">
        <Dropdown
          disabled
          displayText={displayText}
          options={defaultItems}
          onSelected={setSelected}
          selected={selected}
        />
      </Showcase>
    </Stack>
  );
}

export const Default: Story = {
  render: () => <DropdownStories />,
};
