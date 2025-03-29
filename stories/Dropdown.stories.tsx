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

const defaultItems = [
  {
    value: 'item-1',
    displayText: 'Item 1',
  },
  {
    value: 'item-2',
    displayText: 'Item 2',
  },
  {
    value: 'item-3',
    displayText: 'Item 3',
  },
  {
    value: 'item-4',
    displayText: 'Item 4',
  },
  {
    value: 'item-5',
    displayText: 'Item 5',
  },
  {
    value: 'item-6',
    displayText: 'Item 6',
  },
  {
    value: 'item-7',
    displayText: 'Item 7',
  },
  {
    value: 'item-8',
    displayText: 'Item 8',
  },
  {
    value: 'item-9',
    displayText: 'Item 9',
  },
  {
    value: 'item-10',
    displayText: 'Item 10',
  },
  {
    value: 'item-11',
    displayText: 'Item 11',
  },
  {
    value: 'item-12',
    displayText: 'Item 12',
  },
  {
    value: 'item-13',
    displayText: 'Item 13',
  },
  {
    value: 'item-14',
    displayText: 'Item 14',
  },
  {
    value: 'item-15',
    displayText: 'Item 15',
  },
];

type ShowcaseProps = {
  title: string;
} & PropsWithChildren;

function Showcase(props: ShowcaseProps) {
  const { title, children } = props;
  return (
    <Stack.Item mr={4}>
      {title}
      <Box mb={35} />
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
    <Stack fill>
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
