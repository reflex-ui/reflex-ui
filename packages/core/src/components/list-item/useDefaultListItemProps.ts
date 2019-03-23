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
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { ListItemProps, ListItemPropsOptional } from './ListItemProps';

export const useDefaultListItemProps = (
  props: ListItemPropsOptional,
): ListItemProps => {
  const colorThemeOnCtx = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.listItem) {
      throw new MissingComponentThemeError('<ListItem>');
    }
    theme = componentsTheme.listItem;
  }

  const colorTheme: ColorTheme =
    props.colorTheme || colorThemeOnCtx || ColorTheme.SurfaceNormal;

  return {
    ...dimensions,
    colorTheme,
    paletteTheme,
    size: Size.M,
    theme,
    ...props,
  };
};
