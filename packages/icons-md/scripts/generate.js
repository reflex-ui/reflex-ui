/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const generate = require('@reflex-ui/svg2jsx').generate;
const replaceComponentName = require('@reflex-ui/svg2jsx').replaceComponentName;
const runPrettier = require('@reflex-ui/svg2jsx').runPrettier;
const svg2jsx = require('@reflex-ui/svg2jsx').svg2jsx;
const svgr2SvgIcon = require('@reflex-ui/svg2jsx').svgr2SvgIcon;
const camelcase = require('camelcase');
const path = require('path');

const getComponentName = filePath => {
  console.log('getComponentName() - filePath: ', filePath);
  let filename = filePath.substring(
    filePath.lastIndexOf('ic_'),
    filePath.lastIndexOf('_'),
  );
  filename = filename.replace('ic_', '');
  filename = camelcase(filename, { pascalCase: true });
  filename = `${filename}Icon`;
  console.log('getComponentName() - filename: ', filename);
  return filename;
};

const getFileName = filePath => `${getComponentName(filePath)}.tsx`;

const monorepoRoot = path.resolve(__dirname, '../../../');

const targetRoot = path.resolve(__dirname, '../src');

const iconsRoot = path.resolve(
  monorepoRoot,
  'node_modules/material-design-icons',
);

const componentNameTransformer = ({ fileData, filePath }) => {
  const transformedData = replaceComponentName(
    fileData,
    getComponentName(filePath),
  );
  return { fileData: transformedData, filePath };
};

const log = message => input => {
  console.log(message);
  console.log('input: ', input);
  return input;
};

const fileDataTransformerPipe = [
  // log('############ BEGIN svg2jsx() ############'),
  svg2jsx,
  // log('############ BEGIN svgr2SvgIcon() ############'),
  svgr2SvgIcon,
  // log('############ BEGIN componentNameTransformer() ############'),
  componentNameTransformer,
  // log('############ END OF PIPE ############'),
];

const config = {
  targets: [
    {
      destPath: path.resolve(targetRoot, 'action'),
      fileDataTransformerPipe,
      // getComponentName,
      getFileName,
      patternMatch: path.resolve(iconsRoot, 'action/svg/production/*24px.svg'),
      prettierConfig: {
        configPath: `${monorepoRoot}/.prettierrc`,
        shouldRun: true,
      },
    },
    {
      destPath: path.resolve(targetRoot, 'navigation'),
      fileDataTransformerPipe,
      // getComponentName,
      getFileName,
      patternMatch: path.resolve(
        iconsRoot,
        'navigation/svg/production/*24px.svg',
      ),
      prettierConfig: {
        configPath: `${monorepoRoot}/.prettierrc`,
        shouldRun: true,
      },
    },
  ],
};

generate(config);
