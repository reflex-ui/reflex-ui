/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { useDefaultRfxSvgProps } from './useDefaultRfxSvgProps';

export const useDefaultSvgIconProps = (
  props: RfxSvgPropsOptional,
): RfxSvgProps => {
  const componentsTheme = useContext(ComponentsThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.svg) {
      throw new MissingComponentThemeError('<SvgIcon>');
    }
    theme = componentsTheme.svg.svgIcon;
  }

  return {
    ...useDefaultRfxSvgProps(props),
    size: Size.M,
    theme,
    ...props,
  };
};
