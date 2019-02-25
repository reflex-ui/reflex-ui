const path = require('path');

/*
 * Very simple, hardcoded workaround symlink issue with Metro.
 * Issue: https://github.com/facebook/metro/issues/1
 * Tried the following solution to auto discover symlink
 * but it didn't work (always return an empty array):
 * https://github.com/facebook/metro/issues/1#issuecomment-421628147
 */
const packagesPaths = [
  path.resolve(__dirname, '../../packages/core'),
  path.resolve(__dirname, '../../packages/icons-md'),
  path.resolve(__dirname, '../../packages/material-design'),
];
/**/

module.exports = {
  watchFolders: [path.resolve(__dirname, '../../node_modules')].concat(
    packagesPaths,
  ),
};
