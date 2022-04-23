// const path = require('path');
const { resolve } = require('path');

module.exports = {
  stories: ['../src/components'],
  logLevel: 'debug',
  addons: [
    // '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    './localAddon/register.tsx',
    './localAddon/preset.ts',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
          // localIdentName: '[name]__[local]--[hash:base64:5]',
        },
      },
    },
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...{
            containers: resolve("./src/containers"),
            components: resolve("./src/components"),
            styles: resolve("./src/styles")
          }
        }
      }
    };
  },
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../public'],
};
