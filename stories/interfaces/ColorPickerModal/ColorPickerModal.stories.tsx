import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { ColorPickerModal } from './ui';

type StoryProps = ComponentProps<typeof ColorPickerModal>;

export default {
  component: ColorPickerModal,
  title: 'Interfaces/ColorPickerModal',
  tags: ['!autodocs'],
} satisfies Meta<StoryProps>;

export const Default = {};
