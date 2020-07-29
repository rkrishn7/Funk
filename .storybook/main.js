const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.(tsx|ts|js|jsx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links', 
    '@storybook/preset-typescript',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      resolve: {
        alias: {
          "@src": path.resolve(__dirname, '..', 'src/'),
        }
      }
    });

    return config;
  },
};
