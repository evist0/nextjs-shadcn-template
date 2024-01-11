import { StorybookConfig } from '@storybook/nextjs';
import { readCsf } from '@storybook/csf-tools';
import { Indexer } from '@storybook/types';

const STORIES_BLOB = '**/__stories__/*.stories.@(js|jsx|mjs|ts|tsx)';

const LAYERS = ['shared', 'entities', 'features', 'widgets'];

export const stories = LAYERS.map((l) => ({
  directory: `../src/${l}`,
  files: STORIES_BLOB,
  titlePrefix: l,
}));

const csfIndexer: Indexer = {
  test: /(stories|story)\.(m?js|ts)x?$/,
  createIndex: async (fileName, { makeTitle, ...options }) => {
    const customMakeTitle = (title?: string) =>
      makeTitle(title).replace('__stories__/', '');

    const indexInputs = (
      await readCsf(fileName, { ...options, makeTitle: customMakeTitle })
    ).parse().indexInputs;

    return indexInputs.map((index) => ({
      ...index,
      name: index?.name?.toLowerCase(),
    }));
  },
};

export const experimental_indexers: StorybookConfig['experimental_indexers'] = (
  existingIndexers,
) => [csfIndexer].concat(existingIndexers || []);
