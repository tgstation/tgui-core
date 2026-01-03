import { Box, Divider, Section, Stack } from '@components';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    vertical: { control: 'boolean' },
    hidden: { control: 'boolean' },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: (args) => (
    <Section title="Horizontal Divider">
      <Box>Top Content</Box>
      <Divider {...args} />
      <Box>Bottom Content</Box>
    </Section>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <Section title="Vertical Divider">
      <Stack height="40px">
        <Stack.Item>Left</Stack.Item>
        <Stack.Item>
          <Divider {...args} vertical />
        </Stack.Item>
        <Stack.Item>Right</Stack.Item>
      </Stack>
    </Section>
  ),
};

export const Hidden: Story = {
  args: {
    hidden: true,
  },
  render: (args) => (
    <Section title="Hidden Divider (Spacing Only)">
      <Box>Item A</Box>
      <Divider {...args} />
      <Box>Item B</Box>
    </Section>
  ),
};
