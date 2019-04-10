/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { InteractionType } from '../../interaction/InteractionType';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { DimensionsContext } from '../../responsiveness/DimensionsContext';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { ListProps, ListPropsOptional } from './ListProps';

export const useDefaultListProps = (props: ListPropsOptional): ListProps => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const dimensions = useContext(DimensionsContext);
  const paletteTheme = useContext(PaletteThemeContext);

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.list) {
      throw new MissingComponentThemeError('<List>');
    }
    theme = componentsTheme.list;
  }

  const paletteColor = props.paletteColor || paletteTheme.surface;

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
