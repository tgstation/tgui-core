import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: {
        build: true,
      },
    },
  ],
  output: {
    legalComments: 'none',
    minify: true,
  },
  plugins: [pluginReact()],
  source: {
    // FIX: Use a glob that explicitly excludes tests
    // or point to your index if you were bundling.
    entry: {
      index: ['./lib/**/*.{ts,tsx}', '!./lib/**/*.test.*'],
    },
    tsconfigPath: './tsconfig.build.json',
  },
});
