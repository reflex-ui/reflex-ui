/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-ignore Could not find a declaration file for module '@svgr/core'.
// tslint:disable-next-line:import-name
import svgr from '@svgr/core';
import * as fsExtra from 'fs-extra';
import * as glob from 'glob';
import { pipe } from 'lodash/fp';
import * as path from 'path';
import * as prettier from 'prettier';

export const monorepoRoot = path.resolve(__dirname, '../../../../');

export type ComponentNameGetter = (filePath: string) => string;

export type FileNameGetter = ComponentNameGetter;

export interface FileDataTransformerInput {
  readonly fileData: string;
  readonly filePath: string;
}

export type FileDataTransformer = (
  input: FileDataTransformerInput,
) => FileDataTransformerInput;

export interface Target {
  readonly destPath: string;
  readonly fileDataTransformerPipe: FileDataTransformer[];
  // readonly getComponentName?: ComponentNameGetter;
  readonly getFileName?: FileNameGetter;
  readonly patternMatch: string;
}

export interface Config {
  readonly targets: Target[];
}

export const generate = (config: Config) => {
  config.targets.forEach(target => {
    glob(target.patternMatch, {}, (error, filePaths) => {
      if (error) {
        throw error;
      } else {
        generateComponents(filePaths, target);
      }
    });
  });
};

export const generateComponents = (filePaths: string[], target: Target) => {
  filePaths.forEach(filePath => {
    if (
      filePath.indexOf('ic_alarm_24') !== -1 ||
      filePath.indexOf('ic_favorite_24') !== -1 ||
      filePath.indexOf('ic_menu_24') !== -1
    ) {
      generateComponent(filePath, target);
    }
  });
};

export const svg2jsx: FileDataTransformer = ({ fileData, filePath }) => {
  /*
   * There's no built-in SVGR template that works for both
   * React Native and TypeScript. So it seems easier
   * to use the React Native one and make some
   * clunky manual replaces to the outputed content.
   */
  const svgrData = svgr.sync(fileData, {
    native: true,
    // prettier plugin not working well.
    // plugins: ['@svgr/plugin-prettier'],
  });
  /**/

  return { fileData: svgrData, filePath };
};

export const svgr2SvgIcon: FileDataTransformer = ({ fileData, filePath }) => {
  let svgIcon: string = fileData.replace(
    'import React from "react";',
    `import * as React from 'react';
    // @ts-ignore Could not find a declaration file for module 'swgs'.
    // tslint:disable-next-line:import-name`,
  );

  svgIcon = svgIcon.replace(/react-native-svg/g, 'swgs');

  svgIcon = svgIcon.replace(
    'const SvgComponent = props => ',
    `import {
       OptionalFlexSvgProps,
       reflexComponent,
       SvgIcon,
     } from '@reflex-ui/core';\n
    export const SvgComponent = reflexComponent<OptionalFlexSvgProps>({
      name: 'SvgComponent',
    })((props: OptionalFlexSvgProps) => (
      <SvgIcon {...props}>
    `,
  );

  svgIcon = svgIcon.replace(
    ' width={24} height={24} viewBox="0 0 24 24" {...props}',
    '',
  );

  svgIcon = svgIcon.replace('</Svg>;', '</Svg></SvgIcon>));');
  svgIcon = svgIcon.replace('export default SvgComponent;', '');

  return {
    fileData: svgIcon,
    filePath,
  };
};

export const runPrettier = (optionsPath?: string): FileDataTransformer => ({
  fileData,
  filePath,
}) => {
  let options = {};
  if (optionsPath) {
    const optionsStr: string = fsExtra.readFileSync(optionsPath, 'utf-8');
    options = JSON.parse(optionsStr);
  }

  const formatedData: string = prettier.format(fileData, {
    ...options,
    parser: 'typescript',
  });

  return { fileData: formatedData, filePath };
};

export const replaceComponentName = (
  data: string,
  componentName: string,
): string => data.replace(/SvgComponent/g, componentName);

export const generateComponent = (filePath: string, target: Target) => {
  // tslint:disable-next-line:no-console
  console.log('generateComponent() - filePath: ', filePath);

  const data: string = fsExtra.readFileSync(filePath, 'utf-8');

  if (!data) {
    throw new Error(`Error trying to read file: ${filePath}`);
  }
  // tslint:disable-next-line:no-console
  // console.log('generateComponent() - data: ', data);

  const jsx = pipe(target.fileDataTransformerPipe)({
    fileData: data,
    filePath,
  }).fileData;

  let fileName = filePath.substring(
    filePath.lastIndexOf('/'),
    filePath.lastIndexOf('.'),
  );
  fileName = `${fileName}.tsx`;

  const { destPath, getFileName } = target;
  if (getFileName) fileName = getFileName(filePath);
  const destFileName = `${destPath}/${fileName}`;

  fsExtra.ensureDirSync(destPath);

  fsExtra.writeFile(destFileName, jsx, 'utf-8', writeError => {
    if (writeError) {
      // tslint:disable-next-line:no-console
      console.log(
        'generateComponent() fsExtra.writeFile() - writeError: ',
        writeError,
      );
    } else {
      // tslint:disable-next-line:no-console
      console.log('generateComponent() file saved: ', destFileName);
    }
  });
};
