/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { InteractionType } from '../../interaction/InteractionType';
import { PaletteContext } from '../../palette/PaletteContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';

export const useDefaultSurfaceProps = (
  props: SurfacePropsOptional,
): SurfaceProps => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const palette = useContext(PaletteContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.surface) {
      throw new MissingComponentThemeError('<Surface>');
    }
    theme = componentsTheme.surface;
  }

  const paletteColor = props.paletteColor || palette.surface;

  const interactionState = props.interactionState || {
    type: InteractionType.Enabled,
  };

  return {
    ...dimensions,
    contained: (props.contained !== undefined && props.contained) || true,
    interactionState,
    paletteColor,
    theme,
    ...props,
  };
};
