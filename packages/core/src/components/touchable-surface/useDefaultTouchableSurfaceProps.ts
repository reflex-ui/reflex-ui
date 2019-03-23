/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { InteractionType } from '../../interaction';
import { ColorTheme } from '../../palette/ColorTheme';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export const useDefaultTouchableSurfaceProps = (
  props: TouchableSurfacePropsOptional,
): TouchableSurfaceProps => {
  const colorThemeOnCtx = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.touchableSurface) {
      throw new MissingComponentThemeError('<TouchableSurface>');
    }
    theme = componentsTheme.touchableSurface;
  }

  const colorTheme: ColorTheme =
    props.colorTheme || colorThemeOnCtx || ColorTheme.SurfaceNormal;

  return {
    ...dimensions,
    colorTheme,
    interactionState: {
      type: InteractionType.Enabled,
    },
    paletteTheme,
    theme,
    ...props,
  };
};
