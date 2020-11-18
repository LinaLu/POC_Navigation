/* eslint-disable import/no-commonjs */

module.exports = {
  resolver: {
    assetExts: ['stl', 'jsonurl', 'png'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
