import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { ChemDispenser } from './ui';

type StoryProps = ComponentProps<typeof ChemDispenser>;

export default {
  component: ChemDispenser,
  title: 'Interfaces/ChemDispenser',
} satisfies Meta<StoryProps>;

export const Default = {};
