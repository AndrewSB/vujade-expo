const withPlugins = require('next-compose-plugins');
const { withTamagui } = require('@tamagui/next-plugin');

module.exports = withPlugins([
    withTamagui({
        components: [],
    })
]);

// module.exports = withPlugins(
//   [withTamagui({
//     config: './tamagui.config.ts',
//     components: ['tamagui'],
//     importsWhitelist: [],
//     logTimings: true,
//     disableExtraction: process.env.NODE_ENV === 'development',
//   })
// ]
// )
