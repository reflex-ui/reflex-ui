const { paths, getLoader } = require('react-app-rewired');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const regexEquals = (x, y) => x.toString() === y.toString();

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.test && regexEquals(rule.test, /\.(ts|tsx)$/)
  );

  const plugins = [
    // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    new TsconfigPathsPlugin({ configFile: paths.appTsConfig }),
  ];

  // mutations
  delete tsLoader.include;
  config.resolve.plugins = plugins;

  return config;
}
