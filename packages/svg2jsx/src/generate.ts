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

export interface PrettierConfig {
  readonly configPath?: string;
  readonly shouldRun: boolean;
}

export interface Target {
  readonly destPath: string;
  readonly fileDataTransformerPipe: FileDataTransformer[];
  // readonly getComponentName?: ComponentNameGetter;
  readonly getFileName?: FileNameGetter;
  readonly patternMatch: string;
  readonly prettierConfig?: PrettierConfig;
}

export interface Config {
  readonly targets: Target[];
}

export const generate = (config: Config) => {
  let rootIndexPath: string = '';
  let rootIndexData: string = '';
  const moduleNames: string[] = [];
  let targetsProcessedCount: number = 0;

  config.targets.forEach(target => {
    glob(target.patternMatch, {}, (error, filePaths) => {
      if (error) {
        throw error;
      } else {
        generateComponents(filePaths, target);
        if (rootIndexPath === '') {
          rootIndexPath = path.resolve(target.destPath, '../');
          rootIndexPath = `${rootIndexPath}/index.ts`;
        }

        moduleNames.push(
          target.destPath.substring(
            target.destPath.lastIndexOf('/') + 1,
            target.destPath.length,
          ),
        );

        targetsProcessedCount = targetsProcessedCount + 1;

        if (targetsProcessedCount === config.targets.length) {
          // sort module names alphabetically
          moduleNames.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          });

          moduleNames.forEach(moduleName => {
            rootIndexData = `${rootIndexData} export * from './${moduleName}';`;

            if (target.prettierConfig && target.prettierConfig.shouldRun) {
              rootIndexData = runPrettier(target.prettierConfig.configPath)(
                rootIndexData,
              );
            }
          });

          fsExtra.writeFileSync(rootIndexPath, rootIndexData, 'utf-8');
        }
      }
    });
  });
};

export const generateComponents = (filePaths: string[], target: Target) => {
  const generatedFilePaths: string[] = [];
  let generatedFilePath: string;

  filePaths.forEach(filePath => {
    if (
      filePath.indexOf('ic_alarm_24') !== -1 ||
      filePath.indexOf('ic_favorite_24') !== -1 ||
      filePath.indexOf('ic_menu_24') !== -1
    ) {
      generatedFilePath = generateComponent(filePath, target);
      if (generatedFilePath) generatedFilePaths.push(generatedFilePath);
    }
  });

  let indexFileData: string = '';

  generatedFilePaths.forEach(filePath => {
    indexFileData = `
    ${indexFileData}
    export * from '.${filePath.substring(
      filePath.lastIndexOf('/'),
      filePath.lastIndexOf('.'),
    )}';`;
  });

  if (target.prettierConfig && target.prettierConfig.shouldRun) {
    indexFileData = runPrettier(target.prettierConfig.configPath)(
      indexFileData,
    );
  }

  const indexFilePath = `${target.destPath}/index.ts`;
  fsExtra.writeFileSync(indexFilePath, indexFileData, 'utf-8');
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

export const runPrettier = (optionsPath?: string) => (data: string) => {
  let options = {};
  if (optionsPath) {
    const optionsStr: string = fsExtra.readFileSync(optionsPath, 'utf-8');
    options = JSON.parse(optionsStr);
  }

  return prettier.format(data, {
    ...options,
    parser: 'typescript',
  });
};

export const replaceComponentName = (
  data: string,
  componentName: string,
): string => data.replace(/SvgComponent/g, componentName);

export const generateComponent = (filePath: string, target: Target): string => {
  const data: string = fsExtra.readFileSync(filePath, 'utf-8');

  if (!data) {
    throw new Error(`Error trying to read file: ${filePath}`);
  }

  let jsx = pipe(target.fileDataTransformerPipe)({
    fileData: data,
    filePath,
  }).fileData;

  if (target.prettierConfig && target.prettierConfig.shouldRun) {
    jsx = runPrettier(target.prettierConfig.configPath)(jsx);
  }

  let fileName = filePath.substring(
    filePath.lastIndexOf('/'),
    filePath.lastIndexOf('.'),
  );
  fileName = `${fileName}.tsx`;

  const { destPath, getFileName } = target;
  if (getFileName) fileName = getFileName(filePath);
  const destFileName = `${destPath}/${fileName}`;

  fsExtra.ensureDirSync(destPath);
  fsExtra.writeFileSync(destFileName, jsx, 'utf-8');

  return destFileName;
};
