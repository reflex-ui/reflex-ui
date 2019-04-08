/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ColorContext } from '../../palette/ColorContext';
import { PaletteColorArrangement } from '../../palette/PaletteColorArrangement';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';

export const useDefaultRfxViewProps = (
  props: RfxViewPropsOptional,
): RfxViewProps => {
  const colorFromCtx = useContext(ColorContext);
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

  const colorArrangement: PaletteColorArrangement =
    props.colorArrangement || colorFromCtx || paletteTheme.surface.normal;

  return {
    ...dimensionsProps,
    colorArrangement,
    theme,
    ...props,
  };
};
