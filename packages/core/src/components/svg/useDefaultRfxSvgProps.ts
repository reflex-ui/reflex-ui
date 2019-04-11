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
import { InteractionStateContext } from '../../interaction';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export const useDefaultRfxSvgProps = (
  props: RfxSvgPropsOptional,
): RfxSvgProps => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const palette = useContext(PaletteContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.svg) {
      throw new MissingComponentThemeError('<RfxSvg>');
    }
    theme = componentsTheme.svg.rfxSvg;
  }

  const paletteColor =
    props.paletteColor || paletteColorFromCtx || palette.surface;

  return {
    interactionState: interactionStateFromCtx,
    paletteColor,
    size: Size.M,
    theme,
    ...props,
  };
};
