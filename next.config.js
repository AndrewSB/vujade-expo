const withPlugins = require('next-compose-plugins');
const { withTamagui } = require('@tamagui/next-plugin');

module.exports = withPlugins(
  withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: process.env.NODE_ENV === 'development',
  })
)
