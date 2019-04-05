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
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';

export const useDefaultRfxTextProps = (
  props: RfxTextPropsOptional,
): RfxTextProps => {
  const colorThemeOnCtx = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensionsProps = useContext(DimensionsContext);
  const interactionStateFromCtx = useContext(InteractionStateContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.text) {
      throw new MissingComponentThemeError('<RfxText>');
    }
    theme = componentsTheme.text.paragraph1;
  }

  const colorTheme: ColorTheme =
    props.colorTheme || colorThemeOnCtx || ColorTheme.SurfaceNormal;

  return {
    colorTheme,
    ...dimensionsProps,
    interactionState: interactionStateFromCtx,
    paletteTheme,
    theme,
    ...props,
  };
};
