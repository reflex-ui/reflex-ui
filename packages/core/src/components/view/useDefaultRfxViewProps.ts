/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { PaletteColorContext } from '../../palette/PaletteColorContext';
import { PaletteContext } from '../../palette/PaletteContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';

export const useDefaultRfxViewProps = (
  props: RfxViewPropsOptional,
): RfxViewProps => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensionsProps = useContext(DimensionsContext);
  const palette = useContext(PaletteContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.views) {
      throw new MissingComponentThemeError('<Column>');
    }
    theme = componentsTheme.views.column;
  }

  const paletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  return {
    ...dimensionsProps,
    paletteColor,
    theme,
    ...props,
  };
};
