/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
// tslint:disable-next-line:max-line-length
import { applySvgPropsAndThemeToSvgElement } from './applySvgPropsAndThemeToSvgElement';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { RfxSvgTheme } from './RfxSvgTheme';
import { useDefaultRfxSvgProps } from './useDefaultRfxSvgProps';

const getTheme = (
  props: RfxSvgPropsOptional,
  componentsTheme: ComponentsTheme,
): RfxSvgTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.svg === undefined || componentsTheme.svg === null) {
    throw new MissingComponentThemeError('<RfxSvgIcon>');
  }
  return componentsTheme.svg.svgIcon;
};

let RfxSvgIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const theme = getTheme(props, componentsTheme);

  let newProps: RfxSvgProps = useDefaultRfxSvgProps(props, theme);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  if (newProps.children === undefined || newProps.children === null) {
    return null;
  }
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const svgElement = applySvgPropsAndThemeToSvgElement(newProps);
  return <React.Fragment>{svgElement}</React.Fragment>;
};

RfxSvgIcon = processComponent<RfxSvgPropsOptional>(RfxSvgIcon, {
  name: 'SvgIcon',
});

export { RfxSvgIcon };
