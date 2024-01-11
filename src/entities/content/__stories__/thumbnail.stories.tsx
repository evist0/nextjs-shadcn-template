import type { Meta, StoryObj } from '@storybook/react';

import { Thumbnail } from '../ui/thumbnail';

import ExampleImage from './thumbnail.jpg';

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    ...ExampleImage,
    alt: 'Example image',
  },
};

export const Fill: Story = {
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '500px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...ExampleImage,
    alt: 'Placeholder image',
    fill: true,
    style: { objectFit: 'cover' },
    width: undefined,
    height: undefined,
  },
};
