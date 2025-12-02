import type { StorybookConfig } from 'storybook-react-rsbuild';
import {
  booleanStyleMap,
  eventHandlers,
  stringStyleMap,
} from '../lib/common/ui.ts';
import type { BoxInternalProps } from '../lib/components/Box';

const boxInternalProps: Array<keyof BoxInternalProps> = [
  'as',
  'children',
  'className',
  'id',
  'style',
  'tw',
];

const boxProps = [
  ...Object.keys(stringStyleMap),
  ...Object.keys(booleanStyleMap),
  ...boxInternalProps,
  ...eventHandlers,
] as const;

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs'],

  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },

  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    if (process.env.PAGES_URL !== undefined) {
      config.output ??= {};
      config.output.assetPrefix = process.env.PAGES_URL;
    }

    return config;
  },

  stories: ['../stories/**/*.stories.tsx'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (props, component) => {
        if (component.name === 'Box') {
          return true;
        }

        return !boxProps.includes(props.name);
      },
    },
  },
};

export default config;
