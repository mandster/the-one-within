// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ['babel-preset-expo', { jsxImportSource: 'nativewind' }], // Crucial for NativeWind v4
        'nativewind/babel', // This is often used as a preset in v4 setups
      ],
      // If you have other plugins, ensure they are correctly formatted
      // plugins: [
      //   // 'react-native-reanimated/plugin', // Example for Reanimated
      // ],
    };
  };