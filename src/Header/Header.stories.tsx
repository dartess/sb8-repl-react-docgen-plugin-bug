import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  component: Header,
} satisfies Meta<typeof Header>;

export const Example: StoryObj<typeof Header> = {
  name: 'Header',
};
