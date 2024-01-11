import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

import { experimental_indexers, stories } from './stories';

const config: StorybookConfig = {
  stories,
  experimental_indexers,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '~': path.resolve(__dirname, '../src'),
        // TODO: remove this after https://github.com/mswjs/msw-storybook-addon/pull/122 is merged
        'msw/native': require.resolve(
          path.resolve(__dirname, '../node_modules/msw/lib/native/index.mjs'),
        ),
      },
    },
  }),
};
export default config;
