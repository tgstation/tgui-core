import { MenuBar, Section, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof MenuBar.Dropdown>;

export default {
  component: MenuBar.Dropdown,
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
  subcomponents: {
    'MenuBar.Dropdown.MenuItem': MenuBar.Dropdown.MenuItem,
    'MenuBar.Dropdown.MenuItemToggle': MenuBar.Dropdown.MenuItemToggle,
    Menubar: MenuBar,
  },
  title: 'Components/MenuBar.Dropdown',
} satisfies Meta<StoryProps>;

export const Default: StoryObj<StoryProps> = {
  args: {
    disabled: false,
    openWidth: '22rem',
  },
  render: (args) => {
    const [openMenuBar, setOpenMenuBar] = useState<string | null>(null);
    const [openOnHover, setOpenOnHover] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const { openWidth } = args;

    const menuBarProps = {
      openMenuBar: openMenuBar,
      openOnHover: openOnHover,
      setOpenMenuBar: setOpenMenuBar,
      setOpenOnHover: setOpenOnHover,
    };

    function closeMenu() {
      setOpenMenuBar(null);
      setOpenOnHover(false);
    }

    return (
      <MenuBar>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          display="File"
          entry="file"
        >
          <MenuBar.Dropdown.MenuItem display="Open File" onClick={closeMenu} />
          <MenuBar.Dropdown.Submenu display="Open Recent" openWidth={openWidth}>
            <MenuBar.Dropdown.MenuItem display="/foo.js" onClick={closeMenu} />
            <MenuBar.Dropdown.MenuItem display="/bar.ts" onClick={closeMenu} />
            <MenuBar.Dropdown.MenuItem display="/baz.tsx" onClick={closeMenu} />
            <MenuBar.Dropdown.Separator />
            <MenuBar.Dropdown.MenuItem
              display="Clear Recently Opened"
              onClick={closeMenu}
            />
          </MenuBar.Dropdown.Submenu>
          <MenuBar.Dropdown.MenuItem display="Save" onClick={closeMenu} />
          <MenuBar.Dropdown.MenuItem display="Save As" onClick={closeMenu} />
          <MenuBar.Dropdown.Separator />
          <MenuBar.Dropdown.MenuItem display="Exit" onClick={closeMenu} />
        </MenuBar.Dropdown>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          display="Settings"
          entry="settings"
        >
          <MenuBar.Dropdown.MenuItem
            display="User Settings"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.MenuItemToggle
            checked={checkbox}
            display="Save on file edit"
            onClick={() => {
              setCheckbox(!checkbox);
            }}
          />
        </MenuBar.Dropdown>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          display="Help"
          entry="help"
        >
          <MenuBar.Dropdown.MenuItem display="More Info" onClick={closeMenu} />
        </MenuBar.Dropdown>
      </MenuBar>
    );
  },
};
