/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxViewPropsOptional } from '../view/RfxViewProps';
import { useDefaultRfxViewProps } from '../view/useDefaultRfxViewProps';
import { ListItemProps, ListItemPropsOptional } from './ListItemProps';

export const useDefaultListItemProps = (
  props: ListItemPropsOptional,
): ListItemProps => {
  const componentsTheme = useContext(ComponentsThemeContext);
  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.listItem) {
      throw new MissingComponentThemeError('<ListItem>');
    }
    theme = componentsTheme.listItem;
  }

  const rfxViewProps = useDefaultRfxViewProps(props as RfxViewPropsOptional);
  return { ...rfxViewProps, theme } as ListItemProps;
};
