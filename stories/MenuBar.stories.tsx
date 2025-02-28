import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useState } from 'react';
import { Section, Stack } from '../lib/components';
import { MenuBar } from '../lib/components/MenuBar';

type StoryProps = ComponentProps<typeof MenuBar.Dropdown>;

export default {
  component: MenuBar.Dropdown,
  subcomponents: {
    Menubar: MenuBar,
    'MenuBar.Dropdown.MenuItem': MenuBar.Dropdown.MenuItem,
    'MenuBar.Dropdown.MenuItemToggle': MenuBar.Dropdown.MenuItemToggle,
  },
  title: 'Components/MenuBar.Dropdown',
  decorators: (Story) => (
    <Stack direction="column">
      <Stack.Item>
        <Story />
      </Stack.Item>
      <Stack.Item>
        <Section title="Foo">Bar</Section>
      </Stack.Item>
    </Stack>
  ),
} satisfies Meta<StoryProps>;

export const Default: StoryObj<StoryProps> = {
  args: {
    disabled: false,
    openWidth: '22rem',
  },
  render: (args) => {
    const [openMenuBar, setOpenMenuBar] = useState<string | null>(null);
    const [openOnHover, setOpenOnHover] = useState<boolean>(false);
    const [checkbox, setCheckbox] = useState<boolean>(false);

    const menuBarProps = {
      openMenuBar: openMenuBar,
      setOpenMenuBar: setOpenMenuBar,
      openOnHover: openOnHover,
      setOpenOnHover: setOpenOnHover,
    };

    const closeMenu = () => {
      setOpenMenuBar(null);
      setOpenOnHover(false);
    };

    return (
      <MenuBar>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          entry="file"
          display="File"
        >
          <MenuBar.Dropdown.MenuItem
            displayText="Open File"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.MenuItem displayText="Save" onClick={closeMenu} />
          <MenuBar.Dropdown.MenuItem
            displayText="Save As"
            onClick={closeMenu}
          />
        </MenuBar.Dropdown>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          entry="settings"
          display="Settings"
        >
          <MenuBar.Dropdown.MenuItem
            displayText="User Settings"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.MenuItemToggle
            displayText="Save on file edit"
            checked={checkbox}
            onClick={() => {
              setCheckbox(!checkbox);
            }}
          />
        </MenuBar.Dropdown>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          entry="help"
          display="Help"
        >
          <MenuBar.Dropdown.MenuItem
            displayText="More Info"
            onClick={closeMenu}
          />
        </MenuBar.Dropdown>
      </MenuBar>
    );
  },
};
