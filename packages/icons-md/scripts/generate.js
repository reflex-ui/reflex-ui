/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const camelCase = require('camelcase');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const prettier = require('prettier');
const svgr = require('@svgr/core').default;

const monorepoRoot = path.resolve(__dirname, '../../');

const iconsRoot = path.resolve(
  __dirname,
  '../../../node_modules/material-design-icons',
);
const targetRoot = path.resolve(__dirname, '../src');

const getFileName = filePath => {
  console.log('getFileName() - filePath: ', filePath);
  let filename = filePath.substring(
    filePath.lastIndexOf('ic_'),
    filePath.lastIndexOf('_'),
  );
  filename = filename.replace('ic_', '');
  filename = camelCase(filename, { pascalCase: true });
  filename = `${filename}Icon`;
  console.log('getFileName() - filename: ', filename);
  return filename;
};

const config = {
  dirs: [
    {
      pattern: path.resolve(iconsRoot, 'action/svg/production/*24px.svg'),
      destPath: path.resolve(targetRoot, 'action'),
      getFileName: getFileName,
    },
    {
      pattern: path.resolve(iconsRoot, 'navigation/svg/production/*24px.svg'),
      destPath: path.resolve(targetRoot, 'navigation'),
      getFileName: getFileName,
    },
  ],
};

config.dirs.forEach(dir => {
  console.log('config.dirs.forEach() - dir: ', dir);
  glob(dir.pattern, null, (error, files) => {
    if (error) {
      console.log('fs.readdir() - error: ', error);
    } else {
      console.log('fs.readdir() - files: ', files);
      createIcons(files, dir.destPath, dir.getFileName);
    }
  });
});

const createIcons = (files, destPath, getFileName) => {
  files.forEach(file => {
    if (
      file.indexOf('ic_alarm_24') !== -1 ||
      file.indexOf('ic_favorite_24') !== -1 ||
      file.indexOf('ic_menu_24') !== -1
    ) {
      createIcon(file, destPath, getFileName);
    }
  });
};

const createIcon = (file, destPath, getFileName) => {
  console.log('createIcon() - file: ', file);

  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      console.log('createIcon() fs.readFile() - error: ', error);
      return;
    }
    console.log('createIcon() - data: ', data);
    /*
     * There's no built-in SVGR template that works for both
     * React Native and TypeScript. So it seems easier
     * to use the React Native one and make some
     * clunky manual replaces to the outputed content.
     */
    let parsedSvg = svgr.sync(data, {
      native: true,
      // prettier plugin not working well.
      // plugins: ['@svgr/plugin-prettier'],
    });
    console.log('createIcon() - parsedSvg: ', parsedSvg);

    parsedSvg = parsedSvg.replace(
      'import React from "react";',
      `import * as React from 'react';
      // @ts-ignore Could not find a declaration file for module 'swgs'.
      // tslint:disable-next-line:import-name`,
    );

    parsedSvg = parsedSvg.replace(/react-native-svg/g, 'swgs');

    parsedSvg = parsedSvg.replace(
      'const SvgComponent = props => ',
      `import { OptionalFlexSvgProps, reflexComponent, SvgIcon } from '@reflex-ui/core';\n
      export const SvgComponent = reflexComponent<OptionalFlexSvgProps>({
        name: 'SvgComponent',
      })((props: OptionalFlexSvgProps) => (
        <SvgIcon {...props}>
      `,
    );

    parsedSvg = parsedSvg.replace(
      ' width={24} height={24} viewBox="0 0 24 24" {...props}',
      '',
    );

    parsedSvg = parsedSvg.replace('</Svg>;', '</Svg></SvgIcon>));');
    parsedSvg = parsedSvg.replace('export default SvgComponent;', '');

    const filename = getFileName(file);

    parsedSvg = parsedSvg.replace(/SvgComponent/g, filename);

    prettier.resolveConfig(monorepoRoot).then(options => {
      console.log('prettier.resolveConfig() - options: ', options);
      parsedSvg = prettier.format(parsedSvg, {
        ...options,
        parser: 'typescript',
      });
      console.log('prettier.resolveConfig() - parsedSvg: ', parsedSvg);

      const destFileName = `${destPath}/${filename}.tsx`;

      fs.ensureDirSync(destPath);

      fs.writeFile(destFileName, parsedSvg, 'utf-8', error => {
        if (error) {
          console.log('createIcon() fs.writeFile() - error: ', error);
        } else {
          console.log('createIcon() file saved: ', destFileName);
        }
      });
    });
  });
};
