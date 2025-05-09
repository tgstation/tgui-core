import sass from 'sass';
import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-console',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: sass,
        },
      },
    },
  ],
  docs: {},
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config;
  },
  stories: ['../stories/**/*.stories.tsx'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
