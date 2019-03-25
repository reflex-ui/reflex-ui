/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';

export const useDefaultRfxViewProps = (
  props: RfxViewPropsOptional,
): RfxViewProps => {
  const ctxColorTheme = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensionsProps = useContext(DimensionsContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.views) {
      throw new MissingComponentThemeError('<Column>');
    }
    theme = componentsTheme.views.column;
  }

  const colorTheme: ColorTheme =
    props.colorTheme || ctxColorTheme || ColorTheme.SurfaceNormal;

  return {
    ...dimensionsProps,
    colorTheme,
    paletteTheme,
    theme,
    ...props,
  };
};
