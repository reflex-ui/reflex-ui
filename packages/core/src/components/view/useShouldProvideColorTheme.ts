/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { RfxViewPropsBaseOptional } from './RfxViewProps';

export const useShouldProvideColorTheme = (
  props: RfxViewPropsBaseOptional,
): boolean => {
  const colorThemeFromCtx = useContext(ColorThemeContext);
  const { colorTheme } = props;
  return (
    colorTheme !== undefined &&
    colorTheme !== null &&
    colorTheme !== colorThemeFromCtx
  );
};
