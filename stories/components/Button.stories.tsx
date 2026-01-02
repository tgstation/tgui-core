import { COMPONENT_COLORS } from "@common/constants";
import { Button, Stack } from "@components";
import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "storybook-react-rsbuild";

type StoryProps = ComponentProps<typeof Button>;

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    children: { control: "text" },
    color: {
      control: "select",
      options: [...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum],
    },
    disabled: { control: "boolean" },
    compact: { control: "boolean" },
    fluid: { control: "boolean" },
    circular: { control: "boolean" },
    icon: { control: "text" },
    iconPosition: { control: "select", options: ["left", "right"] },
    ellipsis: { control: "boolean" },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  args: {
    children: "Click me",
  },
};

export const States: Story = {
  args: {
    children: "Click me",
  },
  render: (args: StoryProps) => (
    <>
      <Button {...args} />
      <Button {...args} color="transparent" />
      <br />
      <Button {...args} disabled />
      <Button {...args} color="transparent" disabled />
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    icon: "envelope",
  },
  render: (args) => (
    <>
      <Button {...args} />
      <br />
      <Button {...args} iconPosition="right" />
      <br />
      <Button {...args} children={undefined} />
      <br />
      <Button {...args} compact />
    </>
  ),
};

export const Ellipsis: Story = {
  args: {
    children: "Very long content. Very long content. Very long content.",
    ellipsis: true,
    icon: "envelope",
    width: 10,
    fluid: true,
  },
  render: (args) => (
    <>
      <Button {...args} icon={null} />
      <Button {...args} />
      <Button {...args} ellipsis={false} />
      <Stack fill>
        {Array.from({ length: 5 }).map((_, i) => (
          <Stack.Item grow key={i}>
            <Button {...args} fluid>
              Inside Stack Inside Stack Inside Stack
            </Button>
          </Stack.Item>
        ))}
      </Stack>
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
        (color) => (
          <Button key={color} color={color}>
            {color}
          </Button>
        ),
      )}
    </>
  ),
};

type CheckboxStory = StoryObj<ComponentProps<typeof Button.Checkbox>>;

export const Checkbox: CheckboxStory = {
  args: {
    children: "Checkbox",
    checked: false,
    color: "default",
  },
};

type ConfirmStory = StoryObj<ComponentProps<typeof Button.Confirm>>;

export const Confirm: ConfirmStory = {
  args: {
    children: "Click me",
    confirmColor: "bad",
    confirmContent: "Confirm?",
  },
};

type FileStory = StoryObj<ComponentProps<typeof Button.File>>;

export const File: FileStory = {
  args: {
    accept: "image/*",
    children: "Upload file",
  },
};
