module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          // components: './src/components',
          // svg: './src/assets/svg',
          // images: './src/assets/images',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
