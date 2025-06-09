import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { QuantumConsole } from './ui';

type StoryProps = ComponentProps<typeof QuantumConsole>;

export default {
  component: QuantumConsole,
  title: 'Interfaces/Quantum Console', // Dude of course i'd put in my own job
} satisfies Meta<StoryProps>;

export const Default = {};
