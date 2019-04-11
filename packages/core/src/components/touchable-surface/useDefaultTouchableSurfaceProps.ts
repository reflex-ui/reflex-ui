/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { PaletteContext } from '../../color/PaletteContext';
import { MissingComponentThemeError } from '../../errors';
import { InteractionType } from '../../interaction';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export const useDefaultTouchableSurfaceProps = (
  props: TouchableSurfacePropsOptional,
): TouchableSurfaceProps => {
  const paletteColorOnCtx = useContext(PaletteColorContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const palette = useContext(PaletteContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.touchableSurface) {
      throw new MissingComponentThemeError('<TouchableSurface>');
    }
    theme = componentsTheme.touchableSurface;
  }

  const paletteColor =
    props.paletteColor || paletteColorOnCtx || palette.surface;

  return {
    ...dimensions,
    interactionState: {
      type: InteractionType.Enabled,
    },
    paletteColor,
    theme,
    ...props,
  };
};
