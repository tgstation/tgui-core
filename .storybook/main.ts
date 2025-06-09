import sass from 'sass';
import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  addons: [
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: sass,
        },
      },
    },
  ],

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
  },
};

export default config;
