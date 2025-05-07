import type { Preview } from '@storybook/html'
import { defineCustomElements } from '../loader';
import '../src/global/styles/global.scss'; // Adjust path as needed
defineCustomElements();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
