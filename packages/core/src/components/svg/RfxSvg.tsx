/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
// tslint:disable-next-line:max-line-length
import { applySvgPropsAndThemeToSvgElement } from './applySvgPropsAndThemeToSvgElement';
import { RfxSvgPropsOptional } from './RfxSvgProps';
import { RfxSvgTheme } from './RfxSvgTheme';
import { useDefaultRfxSvgProps } from './useDefaultRfxSvgProps';

const useTheme = (theme?: RfxSvgTheme): RfxSvgTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.svg === undefined || componentsTheme.svg === null) {
    throw new MissingComponentThemeError('<RfxSvg>');
  }

  return componentsTheme.svg.rfxSvg;
};

let RfxSvg: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  let newProps = useDefaultRfxSvgProps(props, useTheme(props.theme));
  newProps = { ...newProps, ...useOnLayout(newProps) };
  if (newProps.children === undefined || newProps.children === null) {
    return null;
  }
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme.svg);

  const svgElement = applySvgPropsAndThemeToSvgElement(newProps);
  return <React.Fragment>{svgElement}</React.Fragment>;
};

RfxSvg = processComponent<RfxSvgPropsOptional>(RfxSvg, {
  name: 'Svg',
});

export { RfxSvg };
