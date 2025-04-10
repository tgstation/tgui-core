import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: false,
      dts: {
        build: true,
      },
      format: 'esm',
    },
  ],
  source: {
    entry: {
      index: './lib/**',
    },
    tsconfigPath: './tsconfig.build.json',
  },
  output: {
    legalComments: 'none',
    minify: true,
  },
  plugins: [pluginReact()],
});
