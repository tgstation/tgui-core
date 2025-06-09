import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { Box } from '../../lib/components/Box';
import { Dropdown } from '../../lib/components/Dropdown';
import { Stack } from '../../lib/components/Stack';

type StoryProps = ComponentProps<typeof Dropdown>;

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

const defaultItems: any[] = [];

for (let i = 0; i < 15; i++) {
  defaultItems.push({
    displayText: `Item ${i}`,
    value: `item-${i}`,
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
          onSelected={setSelected}
          options={defaultItems}
          selected={selected}
        />
      </Showcase>
      <Showcase title="Over">
        <Dropdown
          displayText={displayText}
          onSelected={setSelected}
          options={defaultItems}
          over
          selected={selected}
        />
      </Showcase>
      <Showcase title="Buttons">
        <Dropdown
          buttons
          displayText={displayText}
          onSelected={setSelected}
          options={defaultItems}
          selected={selected}
        />
      </Showcase>
      <Showcase title="Disabled">
        <Dropdown
          disabled
          displayText={displayText}
          onSelected={setSelected}
          options={defaultItems}
          selected={selected}
        />
      </Showcase>

      <Showcase title="Tiny">
        <Dropdown
          icon="smile"
          iconOnly
          menuWidth={10}
          onSelected={setSelected}
          options={defaultItems}
          selected={selected}
        />
      </Showcase>
    </Stack>
  );
}

export const Default: Story = {
  render: () => <DropdownStories />,
};
