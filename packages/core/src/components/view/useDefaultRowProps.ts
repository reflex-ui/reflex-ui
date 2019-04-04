/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';
import { useDefaultRfxViewProps } from './useDefaultRfxViewProps';

export const useDefaultRowProps = (
  props: RfxViewPropsOptional,
): RfxViewProps => {
  const componentsTheme = useContext(ComponentsThemeContext);
  let theme = props.theme;
  if (!props.theme) {
    if (!componentsTheme.views) {
      throw new MissingComponentThemeError('<Row>');
    }
    theme = componentsTheme.views.row;
  }

  return useDefaultRfxViewProps({ ...props, theme });
};
