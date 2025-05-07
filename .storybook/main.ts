import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  typescript: {
    check: true,
    reactDocgen: false,
    tsconfigPath: './tsconfig.json'
  },
  viteFinal: async (config) => {
    config.css = {
      preprocessorOptions: {
        scss: {
        }
      }
    };
    return config;
  }
};

export default config;
