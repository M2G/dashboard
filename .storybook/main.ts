import { resolve } from "path";

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  logLevel: 'debug',
  addons: [
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
  webpackFinal: (config: { resolve: { alias: any; }; }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...{
            containers: resolve(__dirname,"./src/containers"),
            components: resolve(__dirname,"./src/components"),
            styles: resolve(__dirname,"./src/styles"),
            fixtures: resolve(__dirname,"./src/fixtures"),
            utils: resolve(__dirname,"./src/utils"),
            gql: resolve(__dirname,"../src/gql")
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
