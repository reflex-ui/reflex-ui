/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { InteractionStateContext } from '../../interaction';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export const useDefaultRfxSvgProps = (
  props: RfxSvgPropsOptional,
): RfxSvgProps => {
  const colorThemeFromCtx = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.svg) {
      throw new MissingComponentThemeError('<RfxSvg>');
    }
    theme = componentsTheme.svg.rfxSvg;
  }

  const colorTheme: ColorTheme =
    props.colorTheme || colorThemeFromCtx || ColorTheme.SurfaceNormal;

  return {
    colorTheme,
    interactionState: interactionStateFromCtx,
    paletteTheme,
    size: Size.M,
    theme,
    ...props,
  };
};
