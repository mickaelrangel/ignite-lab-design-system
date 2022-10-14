module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // viteFinal: (config, { congigType }) => {
  //   if (congigType === 'PRODUCTION') {
  //     config.basePath = '/ignite-lab-design-system/';
  //   }

  //   return config;
  // }
}