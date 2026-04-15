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
          <MenuBar.Dropdown.MenuItem
            displayText="Open File"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.Submenu
            displayText="Open Recent"
            openWidth={openWidth}
          >
            <MenuBar.Dropdown.MenuItem
              displayText="/foo.js"
              onClick={closeMenu}
            />
            <MenuBar.Dropdown.MenuItem
              displayText="/bar.ts"
              onClick={closeMenu}
            />
            <MenuBar.Dropdown.MenuItem
              displayText="/baz.tsx"
              onClick={closeMenu}
            />
            <MenuBar.Dropdown.Separator />
            <MenuBar.Dropdown.MenuItem
              displayText="Clear Recently Opened"
              onClick={closeMenu}
            />
          </MenuBar.Dropdown.Submenu>
          <MenuBar.Dropdown.MenuItem displayText="Save" onClick={closeMenu} />
          <MenuBar.Dropdown.MenuItem
            displayText="Save As"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.Separator />
          <MenuBar.Dropdown.MenuItem displayText="Exit" onClick={closeMenu} />
        </MenuBar.Dropdown>
        <MenuBar.Dropdown
          {...args}
          {...menuBarProps}
          display="Settings"
          entry="settings"
        >
          <MenuBar.Dropdown.MenuItem
            displayText="User Settings"
            onClick={closeMenu}
          />
          <MenuBar.Dropdown.MenuItemToggle
            checked={checkbox}
            displayText="Save on file edit"
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
          <MenuBar.Dropdown.MenuItem
            displayText="More Info"
            onClick={closeMenu}
          />
        </MenuBar.Dropdown>
      </MenuBar>
    );
  },
};
