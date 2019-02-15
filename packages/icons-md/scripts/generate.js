/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const generate = require('@reflex-ui/svg2jsx').generate;
const replaceComponentName = require('@reflex-ui/svg2jsx').replaceComponentName;
const svg2jsx = require('@reflex-ui/svg2jsx').svg2jsx;
const svgr2SvgIcon = require('@reflex-ui/svg2jsx').svgr2SvgIcon;
const camelcase = require('camelcase');
const path = require('path');

const renameInvalidComponentName = name => {
  switch (name) {
    case '3dRotation':
      return 'Rotation3d';
    default:
      return name;
  }
};

const getComponentName = filePath => {
  let filename = filePath.substring(
    filePath.lastIndexOf('/ic_'),
    filePath.lastIndexOf('_'),
  );

  filename = filename.replace('/ic_', '');
  filename = camelcase(filename, { pascalCase: true });
  filename = renameInvalidComponentName(filename);
  filename = `${filename}Icon`;

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

const createTarget = (moduleName, patternMatchIgnore) => ({
  destPath: path.resolve(targetRoot, moduleName),
  fileDataTransformerPipe,
  getFileName,
  patternMatch: path.resolve(
    iconsRoot,
    `${moduleName}/svg/production/*24px.svg`,
  ),
  patternMatchIgnore,
  prettierConfig: {
    configPath: `${monorepoRoot}/.prettierrc`,
    shouldRun: true,
  },
});

const config = {
  targets: [
    createTarget('action'),
    createTarget('alert'),
    createTarget('av'),
    createTarget('communication'),
    createTarget('content'),
    createTarget('device'),
    createTarget('editor'),
    createTarget('file'),
    createTarget('hardware'),
    createTarget('image'),
    createTarget('maps'),
    createTarget('navigation'),
    createTarget('notification'),
    /*
     * This exact same icon with this exact same name
     * is also present in /notification module,
     * which results in a conflic since we export all icons
     * from root of package. An easy fix is just ignoring it here.
     */
    createTarget('places', ['**/ic_rv_hookup_24px.svg']),
    createTarget('social'),
    createTarget('toggle'),
  ],
};

generate(config);
