import { Collapsible } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Collapsible>;

export default {
  component: Collapsible,
  title: 'Components/Collapsible',
  argTypes: {
    title: { control: 'text' },
    open: { control: 'boolean' },
    child_mt: { control: 'number' },
    icon: { control: 'text' },
    sideIcon: { control: 'text' },
    color: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  args: {
    title: 'Click me',
    children: 'Collapsed content',
  },
};

export const OpenByDefault: Story = {
  args: {
    title: 'Open by default',
    open: true,
    children: 'Visible content',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <>
      <Collapsible {...args} title="With normal icon">
        Collapsed content
      </Collapsible>
      <Collapsible {...args} title="With specified icon" icon="folder">
        Collapsed content
      </Collapsible>

      <Collapsible
        {...args}
        title="With both icons"
        icon="folder"
        sideIcon="star"
      >
        Collapsed content
      </Collapsible>

      <Collapsible {...args} title="With side icon" sideIcon="star">
        Collapsed content
      </Collapsible>
    </>
  ),
};

export const StyledChild: Story = {
  args: {
    title: 'Styled child',
    child_mt: -0.1,
    children: 'Collapsed content',
    childStyles: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0 0 0.25em 0.25em',
      color: 'red',
      padding: '0.5em',
    },
  },
};
