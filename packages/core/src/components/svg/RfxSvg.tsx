/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { useOnLayout } from '../../responsiveness/useOnLayout';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
// tslint:disable-next-line:max-line-length
import { applySvgPropsAndThemeToSvgElement } from './applySvgPropsAndThemeToSvgElement';
import { RfxSvgPropsOptional } from './RfxSvgProps';
import { useDefaultRfxSvgProps } from './useDefaultRfxSvgProps';

let RfxSvg: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  let newProps = useDefaultRfxSvgProps(props);
  newProps = { ...newProps, ...useOnLayout(newProps) };
  if (newProps.children === undefined || newProps.children === null) {
    return null;
  }
  newProps = processComponentProps(newProps);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);

  const svgElement = applySvgPropsAndThemeToSvgElement(newProps);
  return <React.Fragment>{svgElement}</React.Fragment>;
};

RfxSvg = processComponent<RfxSvgPropsOptional>(RfxSvg, {
  name: 'Svg',
});

export { RfxSvg };
