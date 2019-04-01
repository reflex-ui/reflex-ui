/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { InteractionType } from '../../interaction/InteractionType';
import { ColorTheme } from '../../palette/ColorTheme';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';

export const useDefaultSurfaceProps = (
  props: SurfacePropsOptional,
): SurfaceProps => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.surface) {
      throw new MissingComponentThemeError('<Surface>');
    }
    theme = componentsTheme.surface;
  }

  const colorTheme: ColorTheme = props.colorTheme || ColorTheme.SurfaceNormal;

  const interactionState = props.interactionState || {
    type: InteractionType.Enabled,
  };

  return {
    ...dimensions,
    colorTheme,
    contained: (props.contained !== undefined && props.contained) || true,
    interactionState,
    paletteTheme,
    theme,
    ...props,
  };
};
